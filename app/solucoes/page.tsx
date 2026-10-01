import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const demoClients = [
  { name: "Google", icon: "https://cdn.simpleicons.org/google/747E8E" },
  { name: "Microsoft", icon: "https://cdn.simpleicons.org/microsoft/747E8E" },
  { name: "Amazon", icon: "https://cdn.simpleicons.org/amazon/747E8E" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta/747E8E" },
  { name: "Apple", icon: "https://cdn.simpleicons.org/apple/747E8E" },
  { name: "NVIDIA", icon: "https://cdn.simpleicons.org/nvidia/747E8E" },
  { name: "Adobe", icon: "https://cdn.simpleicons.org/adobe/747E8E" },
  { name: "Salesforce", icon: "https://cdn.simpleicons.org/salesforce/747E8E" },
  { name: "IBM", icon: "https://cdn.simpleicons.org/ibm/747E8E" },
  { name: "Spotify", icon: "https://cdn.simpleicons.org/spotify/747E8E" }
];

export default function SolucoesPage(){
  return <>
    <MotionEffects/><SiteNav/>
    <main className="marketing-page solutions-page">
      <section className="page-hero solutions-hero">
        <div className="container solutions-hero-grid">
          <div>
            <span className="eyebrow">Soluções Vimi</span>
            <h1>Operação web que cresce junto com o negócio.</h1>
            <p>Da presença digital à conversão, conectamos criação, tecnologia, dados e evolução contínua em uma experiência única.</p>
            <div className="hero-actions">
              <a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a>
              <a className="pill ghost" href="#solucoes-vimi">Explorar soluções <span>↓</span></a>
            </div>
          </div>

          <div className="solutions-orbit" aria-hidden="true">
            <div className="solutions-orbit-core"><span>vimi</span><small>web growth</small></div>
            <span className="orbit-chip chip-web">Web</span>
            <span className="orbit-chip chip-connect">Marketing</span>
            <span className="orbit-chip chip-care">Vendas</span>
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
                <h2>Seu site deixa de trabalhar sozinho.</h2>
                <p>Conectamos formulários, CRM, WhatsApp, dados e automações para preservar contexto e transformar interações em oportunidades.</p>
                <ul><li>CRM</li><li>WhatsApp</li><li>Formulários</li><li>Automações</li></ul>
              </div>

              <div className="solution-illustration connect-illustration connect-flow" aria-hidden="true">
                <div className="connect-flow-grid"></div>
                <div className="connect-flow-core">
                  <span>vimi</span>
                  <small>orquestra</small>
                </div>

                <div className="flow-card flow-site"><i>◫</i><span>Site</span><small>origem</small></div>
                <div className="flow-card flow-crm"><i>◎</i><span>CRM</span><small>contexto</small></div>
                <div className="flow-card flow-wa"><i>↗</i><span>WhatsApp</span><small>conversa</small></div>
                <div className="flow-card flow-data"><i>⌁</i><span>Analytics</span><small>leitura</small></div>
                <div className="flow-card flow-auto"><i>✦</i><span>Automação</span><small>ação</small></div>

                <svg className="flow-paths" viewBox="0 0 100 100">
                  <path d="M17 22 C34 22,38 41,50 50" />
                  <path d="M83 20 C67 22,64 38,50 50" />
                  <path d="M85 78 C68 74,66 61,50 50" />
                  <path d="M16 79 C33 74,35 61,50 50" />
                  <path d="M50 50 C50 68,50 74,50 88" />
                </svg>

                <span className="flow-pulse pulse-1"></span>
                <span className="flow-pulse pulse-2"></span>
                <span className="flow-pulse pulse-3"></span>
                <span className="flow-pulse pulse-4"></span>
              </div>
            </article>

            <article className="solution-story-row">
              <div className="solution-story-copy">
                <h2>O site continua vivo depois do lançamento.</h2>
                <p>Conteúdo, hospedagem, manutenção e atualizações entram em uma rotina contínua, sem transformar cada ajuste em um novo projeto.</p>
                <ul><li>Hospedagem</li><li>Manutenção</li><li>Conteúdo</li><li>Atualizações</li></ul>
              </div>

              <div className="solution-illustration care-illustration checklist-illustration" aria-hidden="true">
                <div className="checklist-window">
                  <div className="checklist-head">
                    <div><span></span><span></span><span></span></div>
                    <small>rotina contínua</small>
                  </div>

                  <div className="check-row row-1">
                    <span className="fake-checkbox">✓</span>
                    <div><b>Conteúdo publicado</b><small>Atualização concluída</small></div>
                    <i>pronto</i>
                  </div>
                  <div className="check-row row-2">
                    <span className="fake-checkbox">✓</span>
                    <div><b>SEO técnico atualizado</b><small>Estrutura revisada</small></div>
                    <i>pronto</i>
                  </div>
                  <div className="check-row row-3">
                    <span className="fake-checkbox">✓</span>
                    <div><b>Integração com CRM ativa</b><small>Fluxo operacional</small></div>
                    <i>pronto</i>
                  </div>
                  <div className="check-row row-4">
                    <span className="fake-checkbox">✓</span>
                    <div><b>Conversão validada</b><small>Jornada funcionando</small></div>
                    <i>pronto</i>
                  </div>

                  <div className="fake-cursor">
                    <svg viewBox="0 0 26 30"><path d="M3 2 22 16l-9 2 4 8-4 2-4-8-6 6Z"/></svg>
                  </div>

                  <div className="checklist-progress"><span></span></div>
                </div>
              </div>
            </article>

            <article className="solution-story-row reverse">
              <div className="solution-story-copy">
                <h2>Melhorias guiadas pelo que realmente acontece.</h2>
                <p>Performance, SEO, comportamento e conversão ajudam a identificar onde existe espaço real para crescer.</p>
                <ul><li>Analytics</li><li>SEO</li><li>Conversão</li><li>Experimentação</li></ul>
              </div>

              <div className="solution-illustration growth-illustration performance-dashboard" aria-hidden="true">
                <div className="performance-shell">
                  <div className="performance-head">
                    <div>
                      <small>Performance</small>
                      <b>Visão de crescimento</b>
                    </div>
                    <span>Últimos 30 dias</span>
                  </div>

                  <div className="performance-kpis">
                    <div><small>Conversão</small><b>+28,4%</b><i>↑ 6,2%</i></div>
                    <div><small>Leads</small><b>1.284</b><i>↑ 19,2%</i></div>
                    <div><small>Engajamento</small><b>64,8%</b><i>↑ 14,8%</i></div>
                  </div>

                  <div className="performance-chart">
                    <div className="chart-grid-lines"><i></i><i></i><i></i><i></i></div>
                    <div className="chart-bars">
                      <span style={{height:"34%"}}></span>
                      <span style={{height:"48%"}}></span>
                      <span style={{height:"42%"}}></span>
                      <span style={{height:"63%"}}></span>
                      <span style={{height:"71%"}}></span>
                      <span style={{height:"86%"}}></span>
                    </div>
                    <svg viewBox="0 0 100 45" preserveAspectRatio="none">
                      <path d="M0 36 C15 34,18 29,31 30 S50 22,60 23 S77 12,100 9" />
                      <circle cx="100" cy="9" r="2" />
                    </svg>
                  </div>

                  <div className="performance-foot">
                    <span><i></i> Conversões</span>
                    <span><i></i> Tendência</span>
                    <b>Atualizado agora</b>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section client-proof-section">
        <div className="container">
          <div className="client-proof-head">
            <div>
              <span className="eyebrow dark">Prova social</span>
              <h2>Marcas que inspiram o padrão de excelência da Vimi.</h2>
            </div>
            <p>Esta seção é uma simulação visual da versão experimental do projeto. Os logos abaixo são demonstrativos e não representam clientes reais da Vimi.</p>
          </div>

          <div className="client-logo-grid">
            {demoClients.map((client)=>(
              <div className="client-logo-card" key={client.name}>
                <img src={client.icon} alt="" loading="lazy" />
                <span>{client.name}</span>
              </div>
            ))}
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