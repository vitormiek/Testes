import { getPublishedPosts } from "@/lib/vimi-api";

type Post = { id:string; title:string; slug:string; excerpt:string|null; content:string|null; category:string };

export default async function InsightsPage(){
  let posts: Post[] = [];
  try {
    const data = await getPublishedPosts();
    posts = data.posts || [];
  } catch {}

  return (
    <main className="insights-page">
      <header className="simple-nav">
        <a className="wordmark" href="/">vimi</a>
        <a className="pill secondary" href="/">Voltar <span>↗</span></a>
      </header>
      <section className="insights-hero">
        <div className="eyebrow dark">Vimi Insights</div>
        <h1>Ideias para uma web que não fica parada.</h1>
        <p>Estratégia, tecnologia, SEO, conversão e operação digital — publicadas a partir da nova base editorial da Vimi.</p>
      </section>
      <section className="insights-list">
        {posts.map((post)=><article id={post.slug} key={post.id}><div className="meta">{post.category}</div><h2>{post.title}</h2><p className="lead">{post.excerpt}</p><p>{post.content}</p></article>)}
      </section>
    </main>
  );
}
