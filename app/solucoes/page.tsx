import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export default function SolucoesPage(){
  return <>
    <MotionEffects/><SiteNav/>
    <main className="marketing-page solutions-page">
      <section className="page-hero solutions-hero">
        <div className="container solutions-hero-grid">
          <div>
            <span className="eyebrow">Soluções Vimi</span>
            <h1>Uma operação web que cresce junto com o negócio.</h1>
            <p>Da presença digital à conversão, conectamos criação, tecnologia, dados e evolução contínua em uma experiência única.</p>
            <div className="hero-actions">
              <a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a>
              <a className="pill ghost" href="#solucoes-vimi">Explorar soluções <span>↓</span></a>
            </div>
          </div>

          <div className="solutions-orbit" aria-hidden="true">
            <div className="solutions-orbit-core"><span>vimi</span><small>web growth</small></div>
            <span className="orbit-chip chip-web">Web</span>
            <span className="orbit-chip chip-connect">Connect</span>
            <span className="orbit-chip chip-care">Care</span>
            <span className="orbit-chip chip-growth">Growth</span>
            <i className="orbit-ring ring-a"></i>
            <i className="orbit-ring ring-b"></i>
          </div>
        </div>
      </section>

      <section className="section solutions-showcase" id="solucoes-vimi">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow dark">O ecossistema Vimi</span><h2>Quatro frentes. Uma operação só.</h2></div>
            <p>Você pode começar por uma necessidade específica e evoluir depois. As soluções foram desenhadas para funcionar de forma independente ou conectada.</p>
          </div>

          <div className="solution-story">
            <article className="solution-story-row">
              <div className="solution-story-copy">
                <span className="solution-index">01</span>
                <span className="solution-label">Vimi Web</span>
                <h2>Presença digital que representa o tamanho do seu negócio.</h2>
                <p>Sites institucionais, landing pages, e-commerces e experiências digitais com foco em autoridade, clareza e conversão.</p>
                <ul><li>Sites institucionais</li><li>Landing pages</li><li>E-commerce</li><li>Experiências de campanha</li></ul>
              </div>
              <div className="solution-illustration web-illustration" aria-hidden="true">
                <div className="browser-frame">
                  <span className="browser-top"></span>
                  <div className="browser-hero"></div>
                  <div className="browser-grid"><i></i><i></i><i></i></div>
                </div>
                <span className="floating-tag tag-a">SEO</span>
                <span className="floating-tag tag-b">UX</span>
              </div>
            </article>

            <article className="solution-story-row reverse">
              <div className="solution-story-copy">
                <span className="solution-index">02</span>
                <span className="solution-label">Vimi Connect</span>
                <h2>Seu site deixa de trabalhar sozinho.</h2>
                <p>Conectamos formulários, CRM, WhatsApp, dados e automações para preservar contexto e transformar interações em oportunidades.</p>
                <ul><li>CRM</li><li>WhatsApp</li><li>Formulários</li><li>Automações</li></ul>
              </div>
              <div className="solution-illustration connect-illustration" aria-hidden="true">
                <div className="connect-core">vimi</div>
                <span className="connect-node n1">CRM</span>
                <span className="connect-node n2">WA</span>
                <span className="connect-node n3">Data</span>
                <span className="connect-node n4">Flow</span>
                <svg viewBox="0 0 100 100"><line x1="50" y1="50" x2="18" y2="22"/><line x1="50" y1="50" x2="82" y2="22"/><line x1="50" y1="50" x2="18" y2="78"/><line x1="50" y1="50" x2="82" y2="78"/></svg>
              </div>
            </article>

            <article className="solution-story-row">
              <div className="solution-story-copy">
                <span className="solution-index">03</span>
                <span className="solution-label">Vimi Care</span>
                <h2>O site continua vivo depois do lançamento.</h2>
                <p>Conteúdo, hospedagem, manutenção e atualizações entram em uma rotina contínua, sem transformar cada ajuste em um novo projeto.</p>
                <ul><li>Hospedagem</li><li>Manutenção</li><li>Conteúdo</li><li>Atualizações</li></ul>
              </div>
              <div className="solution-illustration care-illustration" aria-hidden="true">
                <div className="care-panel">
                  <div><span></span><b>Disponibilidade</b><strong>99.99%</strong></div>
                  <div><span></span><b>Performance</b><strong>92</strong></div>
                  <div><span></span><b>Atualizações</b><strong>live</strong></div>
                </div>
                <i className="care-pulse"></i>
              </div>
            </article>

            <article className="solution-story-row reverse">
              <div className="solution-story-copy">
                <span className="solution-index">04</span>
                <span className="solution-label">Vimi Growth</span>
                <h2>Melhorias guiadas pelo que realmente acontece.</h2>
                <p>Performance, SEO, comportamento e conversão ajudam a identificar onde existe espaço real para crescer.</p>
                <ul><li>Analytics</li><li>SEO</li><li>Conversão</li><li>Experimentação</li></ul>
              </div>
              <div className="solution-illustration growth-illustration" aria-hidden="true">
                <div className="growth-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                <div className="growth-line"><span></span></div>
                <div className="growth-metric"><small>Conversão</small><b>+28,4%</b></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section conversion-section solution-problems" id="problemas">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow dark">O que a Vimi resolve</span><h2>A sua presença digital não pode virar uma coleção de problemas.</h2></div>
            <p>Traduzimos complexidade técnica em uma operação mais simples, profissional e preparada para gerar oportunidades.</p>
          </div>

          <div className="pain-grid">
            <article className="pain-card issue-card"><div className="issue-mark">↺</div><h3>Site desatualizado</h3><p>A empresa evoluiu, mas o site ainda transmite uma versão antiga do negócio.</p></article>
            <article className="pain-card issue-card"><div className="issue-mark">↘</div><h3>Poucos contatos</h3><p>Há visitas, mas faltam caminhos claros para transformar interesse em conversa comercial.</p></article>
            <article className="pain-card issue-card"><div className="issue-mark">⌁</div><h3>Ferramentas desconectadas</h3><p>Marketing, atendimento e vendas trabalham em sistemas que não compartilham contexto.</p></article>
            <article className="pain-card issue-card"><div className="issue-mark">•••</div><h3>Dependência para mudar</h3><p>Qualquer ajuste simples depende de orçamento, fila, fornecedor e tempo demais.</p></article>
            <article className="pain-card issue-card"><div className="issue-mark">?</div><h3>Dados sem direção</h3><p>Métricas existem, mas não ajudam a entender o que realmente gera oportunidade.</p></article>
            <article className="pain-card issue-card"><div className="issue-mark">⌇</div><h3>Crescimento sem estrutura</h3><p>A operação comercial cresce, mas a presença digital não acompanha a mesma velocidade.</p></article>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container centered-cta">
          <span className="eyebrow dark">Uma solução, não um pacote fechado</span>
          <h2>A combinação certa depende do seu momento.</h2>
          <p>A Vimi organiza o que faz sentido agora e deixa a estrutura pronta para evoluir depois.</p>
          <a className="pill primary" href="/#diagnostico">Descobrir meu caminho <span>↗</span></a>
        </div>
      </section>
    </main>
    <SiteFooter/>
  </>;
}