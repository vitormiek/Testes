import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPublishedPost } from "@/lib/vimi-api";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

type Props={params:Promise<{slug:string}>};

function dateLabel(value:string|null){
  if(!value) return "";
  return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"long",year:"numeric"}).format(new Date(value));
}

function readingTime(content:string){
  const words=content.trim()?content.trim().split(/\s+/).length:0;
  return Math.max(1,Math.ceil(words/220));
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const post=await getPublishedPost(slug);
  if(!post) return {title:"Conteúdo não encontrado | Vimi"};
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt || undefined,
    robots:{index:false,follow:false},
    openGraph:{
      title:post.seo_title || post.title,
      description:post.seo_description || post.excerpt || undefined,
      type:"article",
      images:post.cover_image_url?[post.cover_image_url]:undefined
    }
  };
}

export default async function ArticlePage({params}:Props){
  const {slug}=await params;
  const post=await getPublishedPost(slug);
  if(!post) notFound();

  return <>
    <SiteNav/>
    <main className="article-page">
      <header className="article-hero">
        <div className="article-heading">
          <a className="article-back" href="/insights">← Vimi Insights</a>
          <span className="meta">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta">{post.author_name} <span>·</span> {dateLabel(post.published_at)} <span>·</span> {readingTime(post.content || "")} min de leitura</div>
        </div>
        {post.cover_image_url && <div className="article-cover"><img src={post.cover_image_url} alt="" /></div>}
      </header>

      <section className="article-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content || ""}</ReactMarkdown>
      </section>

      <section className="article-end">
        <span className="eyebrow dark">Continue evoluindo</span>
        <h2>Seu site também pode trabalhar como uma operação viva.</h2>
        <a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a>
      </section>
    </main>
    <SiteFooter/>
  </>;
}
