"use client";

import { useEffect, useState } from "react";
import { getPublishedPosts } from "@/lib/vimi-api";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
};

export function BlogPreview() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPublishedPosts()
      .then((data) => setPosts((data.posts || []).slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  if (!posts.length) return <div className="loading-card">Carregando Vimi Insights…</div>;

  return (
    <div className="insights-grid">
      {posts.map((post, index) => (
        <article className={index === 0 ? "insight featured" : "insight"} key={post.id}>
          <div className="insight-art"><span></span><span></span><span></span></div>
          <div className="meta">{post.category}</div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <a href={"/insights/" + post.slug}>Ler análise <b>↗</b></a>
        </article>
      ))}
    </div>
  );
}
