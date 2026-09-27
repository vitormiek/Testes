"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { getAdminSupabase } from "@/lib/admin-supabase";

type Post={id:string;title:string;slug:string;category:string;status:string;excerpt:string|null;created_at:string};
type Lead={id:string;name:string;email:string;company:string|null;need:string|null;goal:string|null;status:string;created_at:string};

export function AdminApp(){
  const [client,setClient]=useState<SupabaseClient|null>(null);
  const [session,setSession]=useState<Session|null>(null);
  const [allowed,setAllowed]=useState<boolean|null>(null);
  const [tab,setTab]=useState<"overview"|"posts"|"leads">("overview");
  const [posts,setPosts]=useState<Post[]>([]);
  const [leads,setLeads]=useState<Lead[]>([]);
  const [message,setMessage]=useState("");

  async function verify(nextClient:SupabaseClient,nextSession:Session|null){
    setSession(nextSession);
    if(!nextSession){setAllowed(false);return}
    const {data}=await nextClient.from("vimi_admin_users").select("role").eq("user_id",nextSession.user.id).maybeSingle();
    const ok=!!data;
    setAllowed(ok);
    if(ok) await load(nextClient);
  }

  async function load(nextClient=client){
    if(!nextClient)return;
    const [{data:p},{data:l}]=await Promise.all([
      nextClient.from("vimi_posts").select("id,title,slug,category,status,excerpt,created_at").order("created_at",{ascending:false}),
      nextClient.from("vimi_leads").select("id,name,email,company,need,goal,status,created_at").order("created_at",{ascending:false})
    ]);
    setPosts((p as Post[])||[]);
    setLeads((l as Lead[])||[]);
  }

  useEffect(()=>{
    let unsubscribe=()=>{};
    getAdminSupabase().then(async c=>{
      setClient(c);
      const {data}=await c.auth.getSession();
      await verify(c,data.session);
      const {data:listener}=c.auth.onAuthStateChange((_event,next)=>{void verify(c,next)});
      unsubscribe=()=>listener.subscription.unsubscribe();
    }).catch(()=>setAllowed(false));
    return()=>unsubscribe();
  },[]);

  async function login(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!client)return;
    setMessage("Entrando…");
    const form=new FormData(event.currentTarget);
    const {error}=await client.auth.signInWithPassword({
      email:String(form.get("email")),
      password:String(form.get("password"))
    });
    setMessage(error?"E-mail ou senha inválidos.":"");
  }

  async function createPost(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!client||!session)return;
    const form=new FormData(event.currentTarget);
    const status=String(form.get("status")||"draft");
    const {error}=await client.from("vimi_posts").insert({
      title:form.get("title"),
      slug:form.get("slug"),
      category:form.get("category"),
      excerpt:form.get("excerpt"),
      content:form.get("content"),
      status,
      published_at:status==="published"?new Date().toISOString():null,
      created_by:session.user.id
    });
    setMessage(error?error.message:"Artigo salvo.");
    if(!error){event.currentTarget.reset();await load(client)}
  }

  async function changeLead(id:string,status:string){
    if(!client)return;
    await client.from("vimi_leads").update({status}).eq("id",id);
    await load(client);
  }

  const metrics=useMemo(()=>({
    posts:posts.length,
    published:posts.filter(x=>x.status==="published").length,
    leads:leads.length,
    newLeads:leads.filter(x=>x.status==="new").length
  }),[posts,leads]);

  if(allowed===null)return <main className="admin-preview"><div className="admin-preview-inner"><div className="wordmark">vimi</div><p>Carregando ambiente administrativo…</p></div></main>;

  if(!session||!allowed){
    return <main className="admin-login-page"><section className="admin-login">
      <a className="wordmark" href="/">vimi</a>
      <div className="eyebrow dark">Admin</div>
      <h1>Gestão da presença digital.</h1>
      <p>Entre com sua conta administrativa para gerenciar conteúdo e leads.</p>
      <form onSubmit={login}>
        <label>E-mail<input name="email" type="email" required /></label>
        <label>Senha<input name="password" type="password" required /></label>
        <button className="pill primary" type="submit">Entrar <span>↗</span></button>
        {message&&<small>{message}</small>}
      </form>
      <a className="back-site" href="/">← Voltar ao site</a>
    </section></main>
  }

  return <div className="admin-shell">
    <aside className="admin-sidebar">
      <a className="wordmark" href="/">vimi</a>
      <span className="admin-badge">WebOps V1</span>
      <nav>
        <button className={tab==="overview"?"active":""} onClick={()=>setTab("overview")}>Visão geral</button>
        <button className={tab==="posts"?"active":""} onClick={()=>setTab("posts")}>Conteúdo</button>
        <button className={tab==="leads"?"active":""} onClick={()=>setTab("leads")}>Leads</button>
      </nav>
      <button className="logout" onClick={()=>client.auth.signOut()}>Sair</button>
    </aside>

    <main className="admin-main">
      <header className="admin-top">
        <div><span className="eyebrow dark">Vimi WebOps</span><h1>{tab==="overview"?"Visão geral":tab==="posts"?"Conteúdo":"Leads"}</h1></div>
        <a className="pill secondary" href="/" target="_blank">Ver site <span>↗</span></a>
      </header>

      {tab==="overview"&&<>
        <div className="admin-metrics">
          <div><small>Artigos</small><strong>{metrics.posts}</strong><span>{metrics.published} publicados</span></div>
          <div><small>Leads</small><strong>{metrics.leads}</strong><span>{metrics.newLeads} novos</span></div>
          <div><small>CMS</small><strong>Ativo</strong><span>Supabase + RLS</span></div>
          <div><small>Frontend</small><strong>V1</strong><span>Next.js + Vercel</span></div>
        </div>
        <section className="admin-panel"><span className="eyebrow dark">Foundation</span><h2>O site já está virando produto.</h2><p>Conteúdo e leads já são administrados em uma camada própria da Vimi. A próxima evolução conecta CRM, Analytics e automações.</p></section>
      </>}

      {tab==="posts"&&<div className="admin-two-col">
        <section className="admin-panel">
          <span className="eyebrow dark">Novo artigo</span><h2>Publicar no Vimi Insights</h2>
          <form className="post-form" onSubmit={createPost}>
            <label>Título<input name="title" required /></label>
            <label>Slug<input name="slug" required placeholder="exemplo-de-slug" /></label>
            <label>Categoria<input name="category" defaultValue="Estratégia" required /></label>
            <label>Resumo<textarea name="excerpt" rows={3} /></label>
            <label>Conteúdo<textarea name="content" rows={8} /></label>
            <label>Status<select name="status" defaultValue="draft"><option value="draft">Rascunho</option><option value="published">Publicado</option></select></label>
            <button className="pill primary" type="submit">Salvar artigo <span>↗</span></button>
            {message&&<small>{message}</small>}
          </form>
        </section>
        <section className="admin-panel"><span className="eyebrow dark">Biblioteca</span><h2>{posts.length} artigos</h2><div className="admin-list">
          {posts.map(post=><div className="admin-row" key={post.id}><div><b>{post.title}</b><small>{post.category} · {post.status}</small></div><span>/{post.slug}</span></div>)}
        </div></section>
      </div>}

      {tab==="leads"&&<section className="admin-panel">
        <div className="panel-head"><div><span className="eyebrow dark">Pipeline inicial</span><h2>Leads capturados pelo site</h2></div><span className="count-badge">{leads.length}</span></div>
        <div className="lead-table">
          {leads.map(lead=><div className="lead-row" key={lead.id}>
            <div><b>{lead.name}</b><small>{lead.email}{lead.company?" · "+lead.company:""}</small></div>
            <div><span>{lead.need||"—"}</span><small>{lead.goal||"—"}</small></div>
            <select value={lead.status} onChange={event=>changeLead(lead.id,event.target.value)}>
              <option value="new">Novo</option><option value="qualified">Qualificado</option><option value="contacted">Contatado</option><option value="won">Ganho</option><option value="lost">Perdido</option>
            </select>
          </div>)}
        </div>
      </section>}
    </main>
  </div>
}
