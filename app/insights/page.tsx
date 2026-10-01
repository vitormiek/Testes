import { getBlogBanners, getPublishedPosts } from "@/lib/vimi-api";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionEffects } from "@/components/MotionEffects";
import { InsightsFeed, type BlogBanner, type InsightPost } from "@/components/InsightsFeed";

function dateLabel(value:string|null){
  if(!value) return "";
  return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(value));
}

function NewsArt({post,small=false}:{post:InsightPost;small?:boolean}){
  return <div className={small?"newsroom-art small":"newsroom-art"}>
    {post.cover_image_url ? <img src={post.cover_image_url} alt="" /> : <div className="news-art-fallback"><span>vimi</span><i></i></div>}
  </div>;
}

export default async function InsightsPage(){
  let posts: InsightPost[] = [];
  let banners: BlogBanner[] = [];
  try {
    const [postData,bannerData] = await Promise.all([getPublishedPosts(),getBlogBanners()]);
    posts = postData.posts || [];
    banners = bannerData.banners || [];
  } catch {}

  const featured=posts.find((post)=>post.is_featured) || posts[0];
  const side=featured ? posts.filter((post)=>post.id!==featured.id).slice(0,2) : [];
  const categories=Array.from(new Set(posts.map((post)=>post.category).filter(Boolean)));

  return (
    <>
      <MotionEffects/>
      <SiteNav/>

      <main className="blog-page newsroom-page">
        <section className="newsroom-masthead">
          <div className="container">
            <div className="newsroom-brandline">
              <span>Vimi Insights</span>
              <small>Estratégia · Tecnologia · Conversão · Negócios</small>
            </div>
            <div className="newsroom-title-row">
              <div>
                <span className="eyebrow">Caderno digital</span>
                <h1>Ideias para uma web que não fica parada.</h1>
              </div>
              <p>Conteúdo para quem precisa entender tecnologia sem transformar o negócio em uma conversa técnica.</p>
            </div>
            {categories.length>0 && <div className="newsroom-topic-line">
              <span>Temas</span>
              {categories.map((category)=><a key={category} href="#feed">{category}</a>)}
            </div>}
          </div>
        </section>

        <section className="newsroom-top">
          <div className="container">
            <div className="newsroom-label-row"><span>Em destaque</span><small>Vimi Insights · seleção editorial</small></div>

            {featured ? <div className="newsroom-lead-grid">
              <a id={featured.slug} className="newsroom-lead" href={"#feed-"+featured.slug}>
                <NewsArt post={featured}/>
                <div className="newsroom-lead-copy">
                  <span className="news-category">{featured.category}</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <div className="newsroom-byline"><span>{featured.author_name}</span><span>{dateLabel(featured.published_at)}</span></div>
                </div>
              </a>

              <div className="newsroom-side">
                {side.map((post,index)=><a className="newsroom-side-story no-thumb" id={post.slug} href={"#feed-"+post.slug} key={post.id}>
                  <div>
                    <span className="news-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <div className="newsroom-byline"><span>{dateLabel(post.published_at)}</span></div>
                  </div>
                  <b>0{index+2}</b>
                </a>)}

                <a className="newsroom-side-cta" href="/solucoes">
                  <span>Vimi em prática</span>
                  <h3>Conheça as soluções por trás de uma operação web que evolui.</h3>
                  <b>Explorar soluções ↗</b>
                </a>
              </div>
            </div> : <div className="blog-empty">Novos conteúdos estão sendo preparados no Vimi Studio.</div>}
          </div>
        </section>

        <div id="feed"></div>
        <InsightsFeed posts={posts} banners={banners}/>

        <section className="newsroom-newsletter">
          <div className="container">
            <div>
              <span className="eyebrow">Vimi Insights</span>
              <h2>Menos ruído. Mais clareza para decidir.</h2>
            </div>
            <p>Estratégia, tecnologia, marketing e crescimento traduzidos para quem precisa fazer a presença digital trabalhar pelo negócio.</p>
            <a className="pill primary" href="/#diagnostico">Falar com a Vimi <span>↗</span></a>
          </div>
        </section>
      </main>

      <SiteFooter/>
    </>
  );
}
