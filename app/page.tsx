import { BlogPreview } from "@/components/BlogPreview";
import { LeadWizard } from "@/components/LeadWizard";
import { MotionEffects } from "@/components/MotionEffects";

export default function Home() {
  return (
    <>
      <MotionEffects />
      <header className="site-nav">
        <a className="wordmark" href="#top">vimi</a>
        <nav>
          <a href="#solucoes">Soluções</a>
          <a href="#como">Como funciona</a>
          <a href="#insights">Insights</a>
          <a href="#diagnostico">Começar</a>
        </nav>
        <a className="pill primary" href="#diagnostico">Criar meu site <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Managed web growth</span>
              <h1>Seu site.<br/><em>Sempre evoluindo.</em></h1>
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
              <div className="chip chip1">WhatsApp ✓</div>
              <div className="chip chip2">CRM conectado</div>
              <div className="chip chip3">Analytics live</div>
            </div>
          </div>
        </section>

        <section className="ticker"><div>CRM · WHATSAPP · ANALYTICS · SEO · AUTOMAÇÃO · CONTEÚDO · PERFORMANCE · CRM · WHATSAPP · ANALYTICS · SEO · AUTOMAÇÃO ·</div></section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">O problema</span><h2>Seu site não deveria parar no lançamento.</h2></div>
              <p>Sites envelhecem, campanhas mudam e ferramentas evoluem. Ainda assim, muitas empresas continuam presas a uma estrutura fragmentada, lenta e difícil de gerenciar.</p>
            </div>

            <div className="compare">
              <div className="compare-card">
                <span className="eyebrow dark">Operação fragmentada</span>
                <div className="compare-row"><b>Site</b><span>agência</span></div>
                <div className="compare-row"><b>Hospedagem</b><span>fornecedor B</span></div>
                <div className="compare-row"><b>CRM</b><span>fornecedor C</span></div>
                <div className="compare-row"><b>Alterações</b><span>quando der</span></div>
              </div>
              <div className="compare-card inverse">
                <span className="eyebrow">Com Vimi</span>
                <div className="compare-row"><b>Criação</b><span>integrada</span></div>
                <div className="compare-row"><b>Infraestrutura</b><span>gerenciada</span></div>
                <div className="compare-row"><b>Dados + CRM</b><span>conectados</span></div>
                <div className="compare-row"><b>Evolução</b><span>contínua</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft" id="solucoes">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">A proposta Vimi</span><h2>Um parceiro para toda a sua operação web.</h2></div>
              <p>Da primeira linha de conteúdo aos dados de conversão, construímos uma base digital preparada para operar e evoluir junto com o negócio.</p>
            </div>

            <div className="cards">
              <article className="card"><div className="card-icon">✦</div><h3>Criamos</h3><p>Sites e landing pages orientados à experiência e conversão.</p></article>
              <article className="card"><div className="card-icon">↔</div><h3>Conectamos</h3><p>CRM, WhatsApp, formulários, analytics e automações trabalhando juntos.</p></article>
              <article className="card"><div className="card-icon">⌁</div><h3>Gerenciamos</h3><p>Hospedagem, manutenção, conteúdo e atualizações sem atrito operacional.</p></article>
              <article className="card"><div className="card-icon">↗</div><h3>Evoluímos</h3><p>SEO, performance, experimentação e melhorias orientadas por dados.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="como">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Como funciona</span><h2>Do planejamento à evolução contínua.</h2></div>
              <p>O lançamento deixa de ser a linha de chegada. Ele passa a ser o início de um ciclo permanente de melhoria.</p>
            </div>

            <div className="steps">
              <article><span>01</span><h3>Entendemos</h3><p>Negócio, público, oferta, jornada e métricas.</p></article>
              <article><span>02</span><h3>Construímos</h3><p>Conteúdo, interface, tecnologia, SEO e integrações.</p></article>
              <article><span>03</span><h3>Publicamos</h3><p>Domínio, hospedagem, tracking e validações.</p></article>
              <article><span>04</span><h3>Evoluímos</h3><p>Atualizações e novas oportunidades continuamente.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="insights">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Vimi Insights</span><h2>Conteúdo para quem trata a web como negócio.</h2></div>
              <div><p>Os artigos desta seção já são carregados do CMS conectado à base da Vimi.</p><a className="text-link" href="/insights">Ver todos os insights ↗</a></div>
            </div>
            <BlogPreview />
          </div>
        </section>

        <section className="section dark-section" id="diagnostico">
          <div className="container diagnosis-grid">
            <div>
              <span className="eyebrow">Primeiro recurso comercial real</span>
              <h2>Não preencha um formulário. Conte o cenário.</h2>
              <p>O diagnóstico registra contexto, origem e intenção do lead diretamente na base da Vimi — pronto para a próxima camada de CRM e automações.</p>
            </div>
            <LeadWizard />
          </div>
        </section>

        <section className="section">
          <div className="container final-cta">
            <span className="eyebrow">Vimi V1</span>
            <h2>O site já começa a operar como produto.</h2>
            <p>Next.js no frontend. Supabase para conteúdo e leads. Vercel para deploy. A próxima camada conecta o Vimi Admin, CRM, analytics e automações.</p>
            <a className="pill primary" href="/studio">Conhecer o Vimi Admin <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="wordmark" href="/">vimi</a><p>Seu site. Sempre evoluindo.</p></div>
          <div><b>Produto</b><a href="#solucoes">Soluções</a><a href="#insights">Insights</a><a href="#diagnostico">Começar</a></div>
          <div><b>Operação</b><a href="/studio">Admin</a><span>Next.js + Supabase + Vercel</span></div>
        </div>
        <div className="container footnote">© 2026 Vimi · V1 Production Foundation</div>
      </footer>
    </>
  );
}
