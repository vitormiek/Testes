import { getPublishedPosts } from "@/lib/vimi-api";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionEffects } from "@/components/MotionEffects";

type Post = {
  id:string; title:string; slug:string; excerpt:string|null; category:string;
  cover_image_url:string|null; author_name:string; published_at:string|null;
  tags:string[]; is_featured:boolean;
};

function dateLabel(value:string|null){
  if(!value) return "";
  return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(value));
}

export default async function InsightsPage(){
  let posts: Post[] = [];
  try {
    const data = await getPublishedPosts();
    posts = data.posts || [];
  } catch {}

  const featured = posts.find((post)=>post.is_featured) || posts[0];
  const remaining = featured ? posts.filter((post)=>post.id!==featured.id) : posts;

  return (
    <>
      <MotionEffects/>
      <SiteNav/>
      <main className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <span className="eyebrow">Vimi Insights</span>
            <h1>Ideias para uma web que não fica parada.</h1>
            <p>Estratégia, tecnologia, conversão e crescimento explicados para quem precisa transformar presença digital em negócio.</p>
          </div>
        </section>

        <section className="section blog-index-section">
          <div className="container">
            {featured && <a id={featured.slug} className="blog-featured" href={"#"+featured.slug}>
              <div className="blog-featured-art">
                {featured.cover_image_url ? <img src={featured.cover_image_url} alt="" /> : <div className="blog-art-fallback"><span>vimi</span></div>}
              </div>
              <div className="blog-featured-copy">
                <span className="meta">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="blog-byline">{featured.author_name} · {dateLabel(featured.published_at)}</div>
                <b>Ler artigo ↗</b>
              </div>
            </a>}

            <div className="blog-grid">
              {remaining.map((post)=><a id={post.slug} className="blog-card" href={"#"+post.slug} key={post.id}>
                <div className="blog-card-art">{post.cover_image_url ? <img src={post.cover_image_url} alt="" /> : <div className="blog-art-fallback small"><span>vimi</span></div>}</div>
                <span className="meta">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-byline">{dateLabel(post.published_at)}</div>
              </a>)}
            </div>

            {!posts.length && <div className="blog-empty">Novos conteúdos estão sendo preparados no Vimi Studio.</div>}
          </div>
        </section>
      </main>
      <SiteFooter/>
    </>
  );
}
