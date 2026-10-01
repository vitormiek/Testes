"use client";

import { useMemo, useState } from "react";

export type InsightPost = {
  id:string;
  title:string;
  slug:string;
  excerpt:string|null;
  category:string;
  cover_image_url:string|null;
  author_name:string;
  published_at:string|null;
  tags:string[];
  is_featured:boolean;
};

function dateLabel(value:string|null){
  if(!value) return "";
  return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(value));
}

function ArticleCard({post}:{post:InsightPost}){
  return <a className="news-feed-card" href={"#"+post.slug} id={"feed-"+post.slug}>
    <div className="news-feed-art">
      {post.cover_image_url ? <img src={post.cover_image_url} alt="" /> : <div className="news-art-fallback"><span>vimi</span><i></i></div>}
      <span className="news-category">{post.category}</span>
    </div>
    <div className="news-feed-copy">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="news-feed-meta"><span>{post.author_name}</span><span>{dateLabel(post.published_at)}</span></div>
    </div>
  </a>;
}

export function InsightsFeed({posts}:{posts:InsightPost[]}){
  const [category,setCategory]=useState("Todos");

  const categories=useMemo(()=>{
    const values=Array.from(new Set(posts.map((post)=>post.category).filter(Boolean)));
    return ["Todos",...values];
  },[posts]);

  const filtered=useMemo(()=>{
    if(category==="Todos") return posts;
    return posts.filter((post)=>post.category===category);
  },[posts,category]);

  const first=filtered.slice(0,3);
  const rest=filtered.slice(3);

  return <section className="section news-feed-section">
    <div className="container">
      <div className="news-feed-head">
        <div>
          <span className="eyebrow dark">Feed de Insights</span>
          <h2>Últimas publicações</h2>
        </div>
        <div className="news-filters" aria-label="Filtrar conteúdos por tema">
          {categories.map((item)=><button key={item} className={category===item?"active":""} onClick={()=>setCategory(item)}>{item}</button>)}
        </div>
      </div>

      <div className="news-feed-grid">
        {first.map((post)=><ArticleCard post={post} key={post.id}/>)}
      </div>

      <a className="insights-cta-banner banner-connect" href="/ecossistema">
        <div>
          <span>Vimi Connect</span>
          <h3>Seu site conversa com o resto da operação?</h3>
          <p>Veja como CRM, WhatsApp, dados e automações podem trabalhar como um único ecossistema.</p>
        </div>
        <div className="insights-cta-visual" aria-hidden="true">
          <i></i><i></i><i></i><b>vimi</b>
        </div>
        <strong>Explorar conexões ↗</strong>
      </a>

      {rest.length>0 && <div className="news-feed-grid news-feed-grid-more">
        {rest.map((post)=><ArticleCard post={post} key={post.id}/>)}
      </div>}

      {filtered.length===0 && <div className="blog-empty">Nenhum conteúdo publicado neste tema ainda.</div>}

      <a className="insights-cta-banner banner-growth" href="/#diagnostico">
        <div>
          <span>Vimi Growth</span>
          <h3>Transforme leitura em próximo passo.</h3>
          <p>Conte seu cenário e descubra onde sua presença digital pode evoluir para gerar mais oportunidades.</p>
        </div>
        <div className="insights-growth-bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
        <strong>Quero evoluir ↗</strong>
      </a>
    </div>
  </section>;
}
