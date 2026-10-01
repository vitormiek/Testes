"use client";

import { useEffect, useState } from "react";
import { getPublishedPost } from "@/lib/vimi-api";

type Post={
  title:string; slug:string; excerpt:string|null; content:string|null; category:string;
  cover_image_url:string|null; author_name:string; published_at:string|null;
};

function dateLabel(value:string|null){
  if(!value) return "";
  return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"long",year:"numeric"}).format(new Date(value));
}

function readingTime(content:string){
  const words=content.trim()?content.trim().split(/\s+/).length:0;
  return Math.max(1,Math.ceil(words/220));
}

export function ArticleReader(){
  const [post,setPost]=useState<Post|null>(null);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const slug=new URLSearchParams(window.location.search).get("slug") || "";
    if(!slug){setLoading(false);return}
    getPublishedPost(slug).then((data)=>setPost(data)).catch(()=>setPost(null)).finally(()=>setLoading(false));
  },[]);

  if(loading) return <div className="article-state">Carregando conteúdo…</div>;
  if(!post) return <div className="article-state"><h1>Conteúdo não encontrado.</h1><a href="/insights">← Voltar para Vimi Insights</a></div>;

  return <>
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
      <div className="article-plain-content">{post.content || ""}</div>
    </section>

    <section className="article-end">
      <span className="eyebrow">Continue evoluindo</span>
      <h2>Seu site também pode trabalhar como uma operação viva.</h2>
      <a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a>
    </section>
  </>;
}
