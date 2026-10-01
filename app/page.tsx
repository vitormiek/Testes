import { BlogPreview } from "@/components/BlogPreview";
import { LeadWizard } from "@/components/LeadWizard";
import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const tickerText = "SITES · LANDING PAGES · CRM · WHATSAPP · ANALYTICS · SEO · AUTOMAÇÃO · HOSPEDAGEM · CONTEÚDO · PERFORMANCE · ";
function SegmentIcon({ type }: { type: "services" | "education" | "health" | "realestate" | "local" | "b2b" }) {
  const common = { width: 34, height: 34, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "services") return <svg {...common}><path d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7"/><rect x="3.5" y="7" width="17" height="11.5" rx="2.2"/><path d="M3.5 11.2h17M9 11.2v1.6h6v-1.6"/></svg>;
  if (type === "education") return <svg {...common}><path d="m3 9 9-4 9 4-9 4-9-4Z"/><path d="M7 11.2V15c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.8M21 9v5"/></svg>;
  if (type === "health") return <svg {...common}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/><path d="M9 12h2l1-2.5 1.3 5L14.5 12H17"/></svg>;
  if (type === "realestate") return <svg {...common}><path d="m3.5 11 8.5-7 8.5 7"/><path d="M5.5 10v9h13v-9M9 19v-5h6v5"/></svg>;
  if (type === "local") return <svg {...common}><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>;
  return <svg {...common}><circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="7" r="2.2"/><circle cx="12" cy="17" r="2.2"/><path d="m8.9 8.3 2 6.2M15.1 8.3l-2 6.2M9.2 7h5.6"/></svg>;
}


export default function Home() {
  return (
    <>
      <MotionEffects />
      <SiteNav />

      <main id="top">
        <section className="hero">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Seu site.<br/><em>Sempre<br/>evoluindo</em></h1>
              <p>Criamos, hospedamos e gerenciamos sites conectados ao marketing e às vendas da sua empresa — com tecnologia, dados e evolução contínua em uma única operação.</p>
              <div className="hero-actions">
                <a className="pill primary" href="#diagnostico">Criar meu site <span>↗</span></a>
                <a className="pill ghost" href="#como">Entender como funciona <span>↓</span></a>
              </div>
              <small>Sem vários fornecedores. Sem site abandonado depois do lançamento.</small>
            </div>

            <div className="product-visual">
              <div className="visual-glow"></div>
              <div className="dashboard">
                <div className="dash-head"><b>vimi / growth</b><span>● ● ●</span></div>
                <div className="big-metric"><small>Oportunidades geradas</small><strong>1.284</strong><span>↗ 28,4% este mês</span></div>
                <div className="bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Soluções Vimi">
          <div className="ticker-track">
            <span>{tickerText}</span>
            <span aria-hidden="true">{tickerText}</span>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Não é só um site</span><h2>Porque o problema nunca foi apenas publicar uma página.</h2></div>
              <p>Uma presença digital que gera resultado precisa acompanhar o negócio, conectar ferramentas e evoluir sem transformar cada mudança em um novo projeto.</p>
            </div>

            <div className="comparison-flow">
              <div className="comparison-side comparison-old">
                <div className="comparison-top">
                  <span className="comparison-kicker">Site tradicional</span>
                  <span className="comparison-state">opera isolado</span>
                </div>
                <div className="comparison-list">
                  <div><i>×</i><span>É lançado e fica parado</span></div>
                  <div><i>×</i><span>Ferramentas trabalham separadas</span></div>
                  <div><i>×</i><span>Cada mudança vira uma nova demanda</span></div>
                  <div><i>×</i><span>Dados existem, mas não orientam a operação</span></div>
                </div>
              </div>

              <div className="comparison-bridge" aria-hidden="true">
                <span>→</span>
                <small>evolução</small>
              </div>

              <div className="comparison-side comparison-vimi">
                <div className="comparison-top">
                  <span className="comparison-kicker">Com Vimi</span>
                  <span className="comparison-state">trabalha pelo negócio</span>
                </div>
                <div className="comparison-list">
                  <div><i>✓</i><span>Evolui continuamente</span></div>
                  <div><i>✓</i><span>Marketing, dados e vendas se conectam</span></div>
                  <div><i>✓</i><span>Melhorias entram no fluxo da operação</span></div>
                  <div><i>✓</i><span>Decisões passam a usar contexto e performance</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft" id="solucoes">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">A proposta Vimi</span><h2>Um parceiro para toda a sua operação web.</h2></div>
              <div><p>Da primeira impressão à geração de oportunidades, construímos uma base digital preparada para operar e evoluir junto com o negócio.</p><a className="text-link" href="/solucoes">Conhecer as soluções ↗</a></div>
            </div>

            <div className="cards">
              <article className="card"><div className="card-icon">✦</div><h3>Criamos</h3><p>Sites institucionais, landing pages e e-commerces que valorizam a marca e conduzem o usuário à ação.</p></article>
              <article className="card"><div className="card-icon">↔</div><h3>Conectamos</h3><p>Seu site conversa com CRM, WhatsApp, formulários, dados e automações.</p></article>
              <article className="card"><div className="card-icon">⌁</div><h3>Gerenciamos</h3><p>Conteúdo, hospedagem, manutenção e atualizações deixam de virar um problema interno.</p></article>
              <article className="card"><div className="card-icon">↗</div><h3>Evoluímos</h3><p>Performance, SEO e conversão melhoram continuamente a partir do que os dados mostram.</p></article>
            </div>
          </div>
        </section>

        <section className="section soft" id="segmentos">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Para quem é</span><h2>Estratégia muda conforme o negócio. A base de crescimento também.</h2></div>
              <div><p>Desenhamos a operação web a partir da jornada de compra, da maturidade comercial e do jeito como cada empresa gera valor.</p><a className="text-link" href="/segmentos">Ver segmentos ↗</a></div>
            </div>
            <div className="segment-grid segment-icons-grid">
              <article className="segment-card segment-icon-card"><div className="segment-visual"><SegmentIcon type="services" /></div><b>Serviços profissionais</b></article>
              <article className="segment-card segment-icon-card"><div className="segment-visual"><SegmentIcon type="education" /></div><b>Educação</b></article>
              <article className="segment-card segment-icon-card"><div className="segment-visual"><SegmentIcon type="health" /></div><b>Saúde & clínicas</b></article>
              <article className="segment-card segment-icon-card"><div className="segment-visual"><SegmentIcon type="realestate" /></div><b>Imobiliário & construção</b></article>
              <article className="segment-card segment-icon-card"><div className="segment-visual"><SegmentIcon type="local" /></div><b>Negócios locais em expansão</b></article>
              <article className="segment-card segment-icon-card"><div className="segment-visual"><SegmentIcon type="b2b" /></div><b>B2B & empresas em crescimento</b></article>
            </div>
          </div>
        </section>

        <section className="section ecosystem-section" id="ecossistema">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Conexões que trabalham juntas</span><h2>Tecnologia por trás. Simplicidade na frente.</h2></div>
              <div><p>Seu cliente não precisa entender sua infraestrutura. Ele precisa sentir que tudo funciona. A Vimi conecta as ferramentas certas sem transformar tecnologia em obstáculo.</p><a className="text-link" href="/ecossistema">Explorar o ecossistema ↗</a></div>
            </div>
            <div className="connection-stage">
              <svg className="connection-lines" viewBox="0 0 100 100" aria-hidden="true">
                <line x1="50" y1="50" x2="50" y2="16" />
                <line x1="50" y1="50" x2="23" y2="30" />
                <line x1="50" y1="50" x2="77" y2="30" />
                <line x1="50" y1="50" x2="23" y2="70" />
                <line x1="50" y1="50" x2="77" y2="70" />
                <line x1="50" y1="50" x2="50" y2="84" />
              </svg>

              <div className="connection-ring ring-one"></div>
              <div className="connection-ring ring-two"></div>

              <div className="connection-grid">
                <a className="connection-node node-top" href="/ecossistema"><span>CRM & vendas</span></a>
                <a className="connection-node node-left-top" href="/ecossistema"><span>Descoberta & performance</span></a>
                <a className="connection-node node-right-top" href="/ecossistema"><span>WhatsApp</span></a>
                <a className="connection-node node-left-bottom" href="/ecossistema"><span>Infraestrutura</span></a>

                <div className="connection-hub"><span>vimi</span><small>conecta</small></div>

                <a className="connection-node node-right-bottom" href="/ecossistema"><span>Dados & inteligência</span></a>
                <a className="connection-node node-bottom" href="/ecossistema"><span>Automação</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="como">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Como funciona</span><h2>Do entendimento à evolução contínua.</h2></div>
              <p>Você não precisa chegar com a solução pronta. Nosso trabalho começa entendendo o negócio e transformando essa realidade em uma operação digital melhor.</p>
            </div>

            <div className="journey-stage">
              <div className="journey-track" aria-hidden="true"><span></span></div>

              <article className="journey-step step-discovery">
                <div className="journey-node"><span>01</span><i>◎</i></div>
                <div className="journey-copy">
                  <small>Descoberta</small>
                  <h3>Entendemos</h3>
                  <p>Negócio, público, oferta, jornada e os pontos que precisam evoluir.</p>
                </div>
                <div className="journey-visual visual-discovery">
                  <span></span><span></span><span></span>
                </div>
              </article>

              <article className="journey-step step-build">
                <div className="journey-node"><span>02</span><i>✦</i></div>
                <div className="journey-copy">
                  <small>Construção</small>
                  <h3>Construímos</h3>
                  <p>Conteúdo, experiência, tecnologia e conexões entram em uma mesma arquitetura.</p>
                </div>
                <div className="journey-visual visual-build">
                  <b></b><b></b><b></b>
                </div>
              </article>

              <article className="journey-step step-launch">
                <div className="journey-node"><span>03</span><i>↗</i></div>
                <div className="journey-copy">
                  <small>Operação</small>
                  <h3>Colocamos para operar</h3>
                  <p>Publicação, mensuração e caminhos de conversão passam a funcionar juntos.</p>
                </div>
                <div className="journey-visual visual-launch">
                  <span></span><div></div>
                </div>
              </article>

              <article className="journey-step step-growth">
                <div className="journey-node"><span>04</span><i>↻</i></div>
                <div className="journey-copy">
                  <small>Evolução contínua</small>
                  <h3>Evoluímos</h3>
                  <p>Dados e novas necessidades alimentam o próximo ciclo sem reconstruir tudo do zero.</p>
                </div>
                <div className="journey-visual visual-growth">
                  <i></i><i></i><i></i><i></i>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="insights">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Vimi Insights</span><h2>Conteúdo para quem trata a web como negócio.</h2></div>
              <div><p>Estratégia, tecnologia, conversão e crescimento explicados de forma útil para quem precisa tomar decisões.</p><a className="text-link" href="/insights">Ver todos os insights ↗</a></div>
            </div>
            <BlogPreview />
          </div>
        </section>

        <section className="section dark-section" id="diagnostico">
          <div className="container diagnosis-grid">
            <div>
              <span className="eyebrow">Comece pelo seu cenário</span>
              <h2>Não preencha um formulário. Conte o cenário.</h2>
              <p>Responda em poucos passos e descubra como a Vimi pode estruturar sua presença digital para gerar mais oportunidades.</p>
            </div>
            <LeadWizard />
          </div>
        </section>

        <section className="section">
          <div className="container final-cta">
            <span className="eyebrow">Pronto para evoluir?</span>
            <h2>Seu próximo site pode fazer muito mais do que apenas existir.</h2>
            <p>Mostre seu momento para a Vimi. Nós organizamos estratégia, presença digital e tecnologia em uma solução mais simples para você e mais poderosa para o negócio.</p>
            <a className="pill primary" href="#diagnostico">Quero entender meu próximo passo <span>↗</span></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
