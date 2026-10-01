"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import type { Session, SupabaseClient } from "@supabase/supabase-js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAdminSupabase } from "@/lib/admin-supabase";

type PostStatus = "draft" | "published" | "scheduled";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string;
  status: PostStatus;
  seo_title: string | null;
  seo_description: string | null;
  cover_image_url: string | null;
  author_name: string;
  published_at: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  tags: string[];
  is_featured: boolean;
};

type EditorDraft = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  cover_image_url: string;
  seo_title: string;
  seo_description: string;
  tags: string;
  is_featured: boolean;
  status: PostStatus;
  published_at: string;
};

const EMPTY_DRAFT: EditorDraft = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Estratégia",
  author_name: "Vimi Insights",
  cover_image_url: "",
  seo_title: "",
  seo_description: "",
  tags: "",
  is_featured: false,
  status: "draft",
  published_at: ""
};

const categories = ["Estratégia", "SEO + IA", "Integrações", "Conversão", "Tecnologia", "Negócios"];

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function localDateTime(iso: string | null) {
  if (!iso) return "";
  const date = new Date(iso);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

function humanDate(iso: string | null) {
  if (!iso) return "Sem data";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(iso));
}

function statusLabel(post: Post) {
  if (post.status === "draft") return "Rascunho";
  if (post.status === "scheduled") {
    if (post.published_at && new Date(post.published_at) <= new Date()) return "Publicado";
    return "Agendado";
  }
  return "Publicado";
}

function readingTime(content: string) {
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 220));
}

export function AdminApp() {
  const [client, setClient] = useState<SupabaseClient | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [view, setView] = useState<"dashboard" | "articles" | "editor">("dashboard");
  const [posts, setPosts] = useState<Post[]>([]);
  const [draft, setDraft] = useState<EditorDraft>(EMPTY_DRAFT);
  const [slugTouched, setSlugTouched] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | PostStatus>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewMode, setPreviewMode] = useState<"article" | "google">("article");

  async function loadPosts(nextClient = client) {
    if (!nextClient) return;
    const { data, error } = await nextClient
      .from("vimi_posts")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      setMessage(error.message);
      return;
    }
    setPosts((data as Post[]) || []);
  }

  async function verify(nextClient: SupabaseClient, nextSession: Session | null) {
    setSession(nextSession);
    if (!nextSession) {
      setAllowed(false);
      return;
    }

    const { data } = await nextClient
      .from("vimi_admin_users")
      .select("role")
      .eq("user_id", nextSession.user.id)
      .maybeSingle();

    const ok = Boolean(data);
    setAllowed(ok);
    if (ok) await loadPosts(nextClient);
  }

  useEffect(() => {
    let unsubscribe = () => {};
    getAdminSupabase()
      .then(async (nextClient) => {
        setClient(nextClient);
        const { data } = await nextClient.auth.getSession();
        await verify(nextClient, data.session);
        const { data: listener } = nextClient.auth.onAuthStateChange((_event, nextSession) => {
          void verify(nextClient, nextSession);
        });
        unsubscribe = () => listener.subscription.unsubscribe();
      })
      .catch(() => setAllowed(false));

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!slugTouched && !draft.id) {
      setDraft((current) => ({ ...current, slug: slugify(current.title) }));
    }
  }, [draft.title, draft.id, slugTouched]);

  const metrics = useMemo(() => {
    const published = posts.filter((post) => post.status === "published" || (post.status === "scheduled" && post.published_at && new Date(post.published_at) <= new Date())).length;
    const drafts = posts.filter((post) => post.status === "draft").length;
    const scheduled = posts.filter((post) => post.status === "scheduled" && (!post.published_at || new Date(post.published_at) > new Date())).length;
    return { total: posts.length, published, drafts, scheduled };
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesSearch = !query || [post.title, post.slug, post.category, post.excerpt || ""].some((value) => value.toLowerCase().includes(query));
      const matchesStatus = statusFilter === "all" || post.status === statusFilter;
      const matchesCategory = categoryFilter === "all" || post.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [posts, search, statusFilter, categoryFilter]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!client) return;
    setMessage("Entrando…");
    const form = new FormData(event.currentTarget);
    const { error } = await client.auth.signInWithPassword({
      email: String(form.get("email") || ""),
      password: String(form.get("password") || "")
    });
    setMessage(error ? "E-mail ou senha inválidos." : "");
  }

  function openNewPost() {
    setDraft(EMPTY_DRAFT);
    setSlugTouched(false);
    setMessage("");
    setView("editor");
  }

  function openPost(post: Post) {
    setDraft({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content || "",
      category: post.category,
      author_name: post.author_name || "Vimi Insights",
      cover_image_url: post.cover_image_url || "",
      seo_title: post.seo_title || "",
      seo_description: post.seo_description || "",
      tags: (post.tags || []).join(", "),
      is_featured: Boolean(post.is_featured),
      status: post.status,
      published_at: localDateTime(post.published_at)
    });
    setSlugTouched(true);
    setMessage("");
    setView("editor");
  }

  async function savePost(nextStatus?: PostStatus) {
    if (!client || !session) return;
    if (!draft.title.trim() || !draft.slug.trim()) {
      setMessage("Título e slug são obrigatórios.");
      return;
    }

    setSaving(true);
    setMessage("");

    const status = nextStatus || draft.status;
    let publishedAt: string | null = null;

    if (status === "published") {
      publishedAt = draft.published_at ? new Date(draft.published_at).toISOString() : new Date().toISOString();
    } else if (status === "scheduled") {
      if (!draft.published_at) {
        setMessage("Defina uma data e horário para o agendamento.");
        setSaving(false);
        return;
      }
      publishedAt = new Date(draft.published_at).toISOString();
    }

    const payload = {
      title: draft.title.trim(),
      slug: slugify(draft.slug),
      excerpt: draft.excerpt.trim() || null,
      content: draft.content,
      category: draft.category.trim() || "Estratégia",
      author_name: draft.author_name.trim() || "Vimi Insights",
      cover_image_url: draft.cover_image_url.trim() || null,
      seo_title: draft.seo_title.trim() || null,
      seo_description: draft.seo_description.trim() || null,
      tags: draft.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      is_featured: draft.is_featured,
      status,
      published_at: publishedAt,
      created_by: draft.id ? undefined : session.user.id
    };

    const result = draft.id
      ? await client.from("vimi_posts").update(payload).eq("id", draft.id).select("*").single()
      : await client.from("vimi_posts").insert(payload).select("*").single();

    if (result.error) {
      setMessage(result.error.message.includes("duplicate") ? "Este slug já está em uso. Escolha outro endereço." : result.error.message);
      setSaving(false);
      return;
    }

    const saved = result.data as Post;
    await loadPosts(client);
    openPost(saved);
    setMessage(status === "draft" ? "Rascunho salvo." : status === "scheduled" ? "Publicação agendada." : "Artigo publicado.");
    setSaving(false);
  }

  async function deletePost(post: Post) {
    if (!client) return;
    if (!window.confirm('Excluir definitivamente "' + post.title + '"?')) return;

    const { error } = await client.from("vimi_posts").delete().eq("id", post.id);
    if (error) {
      setMessage(error.message);
      return;
    }
    await loadPosts(client);
    if (draft.id === post.id) {
      setDraft(EMPTY_DRAFT);
      setView("articles");
    }
  }

  async function uploadCover(event: ChangeEvent<HTMLInputElement>) {
    if (!client || !event.target.files?.[0]) return;
    const file = event.target.files[0];

    if (file.size > 8 * 1024 * 1024) {
      setMessage("A imagem deve ter no máximo 8 MB.");
      return;
    }

    setUploading(true);
    setMessage("");
    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const base = slugify(draft.slug || draft.title || "artigo");
    const now = new Date();
    const path = now.getFullYear() + "/" + String(now.getMonth() + 1).padStart(2, "0") + "/" + base + "-" + Date.now() + "." + extension;

    const { error } = await client.storage.from("vimi-blog").upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type
    });

    if (error) {
      setMessage(error.message);
      setUploading(false);
      return;
    }

    const { data } = client.storage.from("vimi-blog").getPublicUrl(path);
    setDraft((current) => ({ ...current, cover_image_url: data.publicUrl }));
    setMessage("Imagem enviada.");
    setUploading(false);
  }

  function insertMarkdown(before: string, after = "") {
    const textarea = document.querySelector<HTMLTextAreaElement>("#cms-content");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = draft.content.slice(start, end);
    const next = draft.content.slice(0, start) + before + selected + after + draft.content.slice(end);
    setDraft((current) => ({ ...current, content: next }));
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    });
  }

  if (allowed === null) {
    return <main className="cms-loading"><div className="cms-loading-card"><div className="cms-brand">vimi</div><span></span><p>Preparando seu ambiente editorial…</p></div></main>;
  }

  if (!session || !allowed) {
    return <main className="cms-login-page">
      <section className="cms-login-card">
        <div className="cms-login-brand"><a href="/">vimi</a><span>Studio</span></div>
        <span className="cms-overline">CMS Vimi Insights</span>
        <h1>Conteúdo que continua trabalhando depois de publicado.</h1>
        <p>Entre para criar, editar, agendar e acompanhar os conteúdos do blog da Vimi.</p>
        <form onSubmit={login}>
          <label>E-mail<input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com" /></label>
          <label>Senha<input name="password" type="password" autoComplete="current-password" required placeholder="••••••••" /></label>
          <button className="cms-primary-button" type="submit">Entrar no Studio <span>↗</span></button>
          {message && <small className="cms-form-message">{message}</small>}
        </form>
        <a className="cms-back-link" href="/">← Voltar para o site</a>
      </section>
    </main>;
  }

  return <div className="cms-shell">
    <aside className="cms-sidebar">
      <div className="cms-sidebar-brand"><a href="/">vimi</a><span>Studio</span></div>
      <div className="cms-sidebar-section">
        <small>Conteúdo</small>
        <button className={view === "dashboard" ? "active" : ""} onClick={() => setView("dashboard")}><span>◫</span> Visão geral</button>
        <button className={view === "articles" ? "active" : ""} onClick={() => setView("articles")}><span>≡</span> Artigos <b>{posts.length}</b></button>
        <button className={view === "editor" && !draft.id ? "active" : ""} onClick={openNewPost}><span>＋</span> Novo artigo</button>
      </div>
      <div className="cms-sidebar-bottom">
        <a href="/insights" target="_blank"><span>↗</span> Abrir Vimi Insights</a>
        <button onClick={() => client?.auth.signOut()}><span>↪</span> Sair</button>
      </div>
    </aside>

    <main className="cms-main">
      <header className="cms-topbar">
        <div>
          <span className="cms-overline">Vimi Insights</span>
          <h1>{view === "dashboard" ? "Visão geral" : view === "articles" ? "Artigos" : draft.id ? "Editar artigo" : "Novo artigo"}</h1>
        </div>
        <div className="cms-top-actions">
          {view !== "editor" && <button className="cms-primary-button compact" onClick={openNewPost}>Novo artigo <span>＋</span></button>}
          <a className="cms-secondary-button" href="/" target="_blank">Ver site ↗</a>
        </div>
      </header>

      {message && <div className="cms-toast" onClick={() => setMessage("")}>{message}<button>×</button></div>}

      {view === "dashboard" && <>
        <section className="cms-metrics">
          <article><span>Total</span><strong>{metrics.total}</strong><small>artigos no CMS</small></article>
          <article><span>Publicados</span><strong>{metrics.published}</strong><small>visíveis no site</small></article>
          <article><span>Rascunhos</span><strong>{metrics.drafts}</strong><small>em desenvolvimento</small></article>
          <article><span>Agendados</span><strong>{metrics.scheduled}</strong><small>publicação futura</small></article>
        </section>

        <section className="cms-dashboard-grid">
          <div className="cms-panel">
            <div className="cms-panel-head"><div><span className="cms-overline dark">Atividade editorial</span><h2>Conteúdos recentes</h2></div><button className="cms-text-button" onClick={() => setView("articles")}>Ver todos ↗</button></div>
            <div className="cms-recent-list">
              {posts.slice(0, 5).map((post) => <button key={post.id} onClick={() => openPost(post)}>
                <span className={"cms-status-dot " + post.status}></span>
                <div><b>{post.title}</b><small>{post.category} · atualizado {humanDate(post.updated_at)}</small></div>
                <span className={"cms-status " + post.status}>{statusLabel(post)}</span>
              </button>)}
              {!posts.length && <div className="cms-empty">Nenhum artigo criado ainda.</div>}
            </div>
          </div>

          <div className="cms-panel cms-start-panel">
            <div className="cms-start-icon">✦</div>
            <span className="cms-overline dark">Próxima publicação</span>
            <h2>Transforme uma ideia em conteúdo.</h2>
            <p>O editor reúne texto, SEO, capa, autoria e publicação em uma única experiência.</p>
            <button className="cms-primary-button" onClick={openNewPost}>Começar um artigo <span>↗</span></button>
          </div>
        </section>
      </>}

      {view === "articles" && <section className="cms-panel cms-library">
        <div className="cms-library-toolbar">
          <div className="cms-search"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar por título, slug ou categoria…" /></div>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "all" | PostStatus)}>
            <option value="all">Todos os status</option><option value="published">Publicados</option><option value="draft">Rascunhos</option><option value="scheduled">Agendados</option>
          </select>
          <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
            <option value="all">Todas as categorias</option>{Array.from(new Set(posts.map((post) => post.category))).map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
        </div>

        <div className="cms-table">
          <div className="cms-table-head"><span>Conteúdo</span><span>Status</span><span>Atualizado</span><span></span></div>
          {filteredPosts.map((post) => <div className="cms-table-row" key={post.id}>
            <button className="cms-post-cell" onClick={() => openPost(post)}>
              <span className="cms-post-thumb">{post.cover_image_url ? <img src={post.cover_image_url} alt="" /> : <i>V</i>}</span>
              <span><b>{post.title}</b><small>/{post.slug} · {post.category}</small></span>
            </button>
            <span><i className={"cms-status " + post.status}>{statusLabel(post)}</i></span>
            <span className="cms-table-date">{humanDate(post.updated_at)}</span>
            <span className="cms-row-actions">
              <button title="Editar" onClick={() => openPost(post)}>Editar</button>
              <button className="danger" title="Excluir" onClick={() => deletePost(post)}>Excluir</button>
            </span>
          </div>)}
          {!filteredPosts.length && <div className="cms-empty large">Nenhum conteúdo corresponde aos filtros.</div>}
        </div>
      </section>}

      {view === "editor" && <div className="cms-editor-layout">
        <section className="cms-editor-main">
          <div className="cms-editor-toolbar">
            <button className="cms-back-button" onClick={() => setView("articles")}>← Artigos</button>
            <div className="cms-save-actions">
              <span className="cms-save-state">{saving ? "Salvando…" : draft.id ? "Alterações salvas manualmente" : "Novo conteúdo"}</span>
              <button className="cms-secondary-button" disabled={saving} onClick={() => savePost("draft")}>Salvar rascunho</button>
              {draft.status === "scheduled" ? <button className="cms-primary-button compact" disabled={saving} onClick={() => savePost("scheduled")}>Agendar <span>↗</span></button> : <button className="cms-primary-button compact" disabled={saving} onClick={() => savePost("published")}>Publicar <span>↗</span></button>}
            </div>
          </div>

          <div className="cms-editor-card">
            <input className="cms-title-input" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} placeholder="Título do artigo" />

            <div className="cms-slug-line">
              <span>vimi.com.br/insights/</span>
              <input value={draft.slug} onChange={(event) => { setSlugTouched(true); setDraft({ ...draft, slug: slugify(event.target.value) }); }} placeholder="endereco-do-artigo" />
            </div>

            <label className="cms-field">
              <span>Resumo <small>{draft.excerpt.length}/240</small></span>
              <textarea rows={3} maxLength={240} value={draft.excerpt} onChange={(event) => setDraft({ ...draft, excerpt: event.target.value })} placeholder="Uma síntese clara que desperte interesse pelo conteúdo." />
            </label>

            <div className="cms-content-label"><span>Conteúdo</span><small>{readingTime(draft.content)} min de leitura</small></div>
            <div className="cms-markdown-toolbar">
              <button onClick={() => insertMarkdown("## ")}>H2</button>
              <button onClick={() => insertMarkdown("### ")}>H3</button>
              <button onClick={() => insertMarkdown("**", "**")}><b>B</b></button>
              <button onClick={() => insertMarkdown("- ")}>• Lista</button>
              <button onClick={() => insertMarkdown("> ")}>“ Citação</button>
              <button onClick={() => insertMarkdown("[texto](", ")")}>↗ Link</button>
            </div>
            <textarea id="cms-content" className="cms-content-editor" value={draft.content} onChange={(event) => setDraft({ ...draft, content: event.target.value })} placeholder={"Escreva o conteúdo aqui.\n\nUse ## para títulos, **texto** para negrito e - para listas."} />

            <details className="cms-seo-section" open>
              <summary><span><b>SEO & descoberta</b><small>Como o conteúdo aparece em buscadores e sistemas de IA.</small></span><span>⌄</span></summary>
              <div className="cms-seo-fields">
                <label className="cms-field"><span>Título SEO <small>{draft.seo_title.length}/60</small></span><input maxLength={70} value={draft.seo_title} onChange={(event) => setDraft({ ...draft, seo_title: event.target.value })} placeholder={draft.title || "Título para mecanismos de busca"} /></label>
                <label className="cms-field"><span>Descrição SEO <small>{draft.seo_description.length}/160</small></span><textarea rows={3} maxLength={180} value={draft.seo_description} onChange={(event) => setDraft({ ...draft, seo_description: event.target.value })} placeholder={draft.excerpt || "Descrição que resume o conteúdo e incentiva o clique."} /></label>
              </div>
            </details>
          </div>
        </section>

        <aside className="cms-editor-aside">
          <div className="cms-aside-card">
            <h3>Publicação</h3>
            <label className="cms-field"><span>Status</span><select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value as PostStatus })}><option value="draft">Rascunho</option><option value="published">Publicar</option><option value="scheduled">Agendar</option></select></label>
            {draft.status === "scheduled" && <label className="cms-field"><span>Data e horário</span><input type="datetime-local" value={draft.published_at} onChange={(event) => setDraft({ ...draft, published_at: event.target.value })} /></label>}
            <label className="cms-field"><span>Categoria</span><input list="cms-categories" value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value })} /><datalist id="cms-categories">{categories.map((category) => <option key={category} value={category} />)}</datalist></label>
            <label className="cms-field"><span>Autor</span><input value={draft.author_name} onChange={(event) => setDraft({ ...draft, author_name: event.target.value })} /></label>
            <label className="cms-field"><span>Tags <small>separe por vírgulas</small></span><input value={draft.tags} onChange={(event) => setDraft({ ...draft, tags: event.target.value })} placeholder="SEO, CRM, estratégia" /></label>
            <label className="cms-check"><input type="checkbox" checked={draft.is_featured} onChange={(event) => setDraft({ ...draft, is_featured: event.target.checked })} /><span><b>Destacar conteúdo</b><small>Prioriza o artigo na vitrine do blog.</small></span></label>
          </div>

          <div className="cms-aside-card">
            <h3>Imagem de capa</h3>
            {draft.cover_image_url ? <div className="cms-cover-preview"><img src={draft.cover_image_url} alt="" /><button onClick={() => setDraft({ ...draft, cover_image_url: "" })}>Remover</button></div> : <div className="cms-cover-empty"><span>▧</span><p>JPG, PNG, WebP ou GIF<br/>até 8 MB.</p></div>}
            <label className={"cms-upload-button " + (uploading ? "disabled" : "")}>{uploading ? "Enviando…" : "Enviar imagem"}<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={uploadCover} disabled={uploading} /></label>
            <div className="cms-or">ou</div>
            <input className="cms-url-input" value={draft.cover_image_url} onChange={(event) => setDraft({ ...draft, cover_image_url: event.target.value })} placeholder="Cole uma URL de imagem" />
          </div>

          <div className="cms-aside-card cms-preview-card">
            <div className="cms-preview-tabs"><button className={previewMode === "article" ? "active" : ""} onClick={() => setPreviewMode("article")}>Artigo</button><button className={previewMode === "google" ? "active" : ""} onClick={() => setPreviewMode("google")}>Google</button></div>
            {previewMode === "article" ? <div className="cms-live-preview">
              {draft.cover_image_url && <img src={draft.cover_image_url} alt="" />}
              <span>{draft.category || "Categoria"}</span>
              <h2>{draft.title || "Título do artigo"}</h2>
              <p>{draft.excerpt || "O resumo do conteúdo aparecerá aqui."}</p>
              <div className="cms-preview-meta">{draft.author_name || "Vimi Insights"} · {readingTime(draft.content)} min</div>
              <div className="cms-preview-body"><ReactMarkdown remarkPlugins={[remarkGfm]}>{draft.content || "Comece a escrever para visualizar o conteúdo."}</ReactMarkdown></div>
            </div> : <div className="cms-google-preview">
              <span>vimi.com.br › insights › {draft.slug || "slug-do-artigo"}</span>
              <h3>{draft.seo_title || draft.title || "Título SEO do conteúdo"}</h3>
              <p>{draft.seo_description || draft.excerpt || "A descrição SEO aparecerá aqui e ajudará o usuário a entender o conteúdo antes do clique."}</p>
            </div>}
          </div>

          {draft.id && <button className="cms-delete-button" onClick={() => {
            const post = posts.find((item) => item.id === draft.id);
            if (post) void deletePost(post);
          }}>Excluir artigo</button>}
        </aside>
      </div>}
    </main>
  </div>;
}
