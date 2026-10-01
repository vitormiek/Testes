"use client";

import { Fragment, useMemo, useState } from "react";

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

export type BlogBanner = {
  id:string;
  internal_name:string;
  label:string|null;
  title:string;
  body:string|null;
  button_text:string;
  button_url:string;
  theme:"dark"|"blue"|"violet"|"light";
  slot:number;
  category:string|null;
  sort_order:number;
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

function CtaBanner({banner}:{banner:BlogBanner}){
  return <a className={"insights-cta-banner cms-banner theme-"+banner.theme} href={banner.button_url}>
    <div>
      {banner.label && <span>{banner.label}</span>}
      <h3>{banner.title}</h3>
      {banner.body && <p>{banner.body}</p>}
    </div>
    <strong>{banner.button_text} ↗</strong>
  </a>;
}

export function InsightsFeed({posts,banners}:{posts:InsightPost[];banners:BlogBanner[]}){
  const [category,setCategory]=useState("Todos");

  const categories=useMemo(()=>{
    const values=Array.from(new Set(posts.map((post)=>post.category).filter(Boolean)));
    return ["Todos",...values];
  },[posts]);

  const filtered=useMemo(()=>{
    if(category==="Todos") return posts;
    return posts.filter((post)=>post.category===category);
  },[posts,category]);

  const visibleBanners=useMemo(()=>{
    return banners
      .filter((banner)=>!banner.category || category==="Todos" || banner.category===category)
      .sort((a,b)=>a.slot-b.slot || a.sort_order-b.sort_order);
  },[banners,category]);

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
        {filtered.map((post,index)=>{
          const position=index+1;
          const slotBanners=visibleBanners.filter((banner)=>banner.slot===position);
          return <Fragment key={post.id}>
            <ArticleCard post={post}/>
            {slotBanners.map((banner)=><CtaBanner banner={banner} key={banner.id}/>)}
          </Fragment>;
        })}
        {visibleBanners.filter((banner)=>banner.slot===0 || banner.slot>filtered.length).map((banner)=><CtaBanner banner={banner} key={banner.id}/>)}
      </div>

      {filtered.length===0 && <div className="blog-empty">Nenhum conteúdo publicado neste tema ainda.</div>}
    </div>
  </section>;
}
