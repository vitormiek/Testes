import { BlogPreview } from "@/components/BlogPreview";
import { LeadWizard } from "@/components/LeadWizard";
import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const tickerText = "SITES · LANDING PAGES · CRM · WHATSAPP · ANALYTICS · SEO · AUTOMAÇÃO · HOSPEDAGEM · CONTEÚDO · PERFORMANCE · ";

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

            <div className="compare">
              <div className="compare-card">
                <span className="eyebrow dark">Site tradicional</span>
                <div className="compare-row"><b>Lançamento</b><span>fim do projeto</span></div>
                <div className="compare-row"><b>Ferramentas</b><span>separadas</span></div>
                <div className="compare-row"><b>Alterações</b><span>lentas</span></div>
                <div className="compare-row"><b>Dados</b><span>espalhados</span></div>
              </div>
              <div className="compare-card inverse">
                <span className="eyebrow">Com Vimi</span>
                <div className="compare-row"><b>Lançamento</b><span>início da evolução</span></div>
                <div className="compare-row"><b>Operação</b><span>integrada</span></div>
                <div className="compare-row"><b>Melhorias</b><span>contínuas</span></div>
                <div className="compare-row"><b>Marketing + vendas</b><span>conectados</span></div>
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
              <article className="card"><div className="card-icon">✦</div><h3>Criamos</h3><p>Sites institucionais e landing pages que valorizam a marca e conduzem o usuário à ação.</p></article>
              <article className="card"><div className="card-icon">↔</div><h3>Conectamos</h3><p>Seu site conversa com CRM, WhatsApp, formulários, dados e automações.</p></article>
              <article className="card"><div className="card-icon">⌁</div><h3>Gerenciamos</h3><p>Conteúdo, hospedagem, manutenção e atualizações deixam de virar um problema interno.</p></article>
              <article className="card"><div className="card-icon">↗</div><h3>Evoluímos</h3><p>Performance, SEO e conversão melhoram continuamente a partir do que os dados mostram.</p></article>
            </div>
          </div>
        </section>

        <section className="section conversion-section" id="problemas">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">O que a Vimi resolve</span><h2>Se sua presença digital virou uma coleção de problemas, começamos por aí.</h2></div>
              <p>Traduzimos complexidade técnica em uma operação mais simples, profissional e preparada para gerar oportunidades.</p>
            </div>
            <div className="pain-grid">
              <article className="pain-card"><span>01</span><h3>Site desatualizado</h3><p>A empresa evoluiu, mas o site ainda transmite uma versão antiga do negócio.</p></article>
              <article className="pain-card"><span>02</span><h3>Poucos contatos</h3><p>Há visitas, mas faltam caminhos claros para transformar interesse em conversa comercial.</p></article>
              <article className="pain-card"><span>03</span><h3>Ferramentas desconectadas</h3><p>Marketing, atendimento e vendas trabalham em sistemas que não compartilham contexto.</p></article>
              <article className="pain-card"><span>04</span><h3>Dependência para mudar</h3><p>Qualquer ajuste simples depende de orçamento, fila, fornecedor e tempo demais.</p></article>
              <article className="pain-card"><span>05</span><h3>Dados sem direção</h3><p>Métricas existem, mas não ajudam a entender o que realmente gera oportunidade.</p></article>
              <article className="pain-card"><span>06</span><h3>Crescimento sem estrutura</h3><p>A operação comercial cresce, mas a presença digital não acompanha a mesma velocidade.</p></article>
            </div>
          </div>
        </section>

        <section className="section soft" id="segmentos">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Para quem é</span><h2>Estratégia muda conforme o negócio. A base de crescimento também.</h2></div>
              <div><p>Desenhamos a operação web a partir da jornada de compra, da maturidade comercial e do jeito como cada empresa gera valor.</p><a className="text-link" href="/segmentos">Ver segmentos ↗</a></div>
            </div>
            <div className="segment-grid">
              <article className="segment-card"><b>Serviços profissionais</b><p>Autoridade, diferenciação e geração de oportunidades qualificadas.</p><span>Consultorias · escritórios · especialistas</span></article>
              <article className="segment-card"><b>Educação</b><p>Captação, campanhas, jornadas por curso e relacionamento com interessados.</p><span>Escolas · faculdades · cursos</span></article>
              <article className="segment-card"><b>Saúde & clínicas</b><p>Confiança, clareza de serviços e uma jornada digital mais fácil para o paciente.</p><span>Clínicas · centros médicos · saúde</span></article>
              <article className="segment-card"><b>Imobiliário & construção</b><p>Projetos, empreendimentos e contatos comerciais organizados em uma experiência premium.</p><span>Construtoras · imobiliárias · urbanismo</span></article>
              <article className="segment-card"><b>Negócios locais em expansão</b><p>Presença profissional para empresas que já cresceram além de uma página básica.</p><span>Serviços · varejo · operações regionais</span></article>
              <article className="segment-card"><b>B2B & empresas em crescimento</b><p>Marketing e vendas conectados para ciclos comerciais mais longos e consultivos.</p><span>Indústria · tecnologia · serviços B2B</span></article>
            </div>
          </div>
        </section>

        <section className="section ecosystem-section" id="ecossistema">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Conexões que trabalham juntas</span><h2>Tecnologia por trás. Simplicidade na frente.</h2></div>
              <div><p>Seu cliente não precisa entender sua infraestrutura. Ele precisa sentir que tudo funciona. A Vimi conecta as ferramentas certas sem transformar tecnologia em obstáculo.</p><a className="text-link" href="/ecossistema">Explorar o ecossistema ↗</a></div>
            </div>
            <div className="ecosystem-grid">
              <article className="ecosystem-card"><div className="ecosystem-icon">◎</div><h3>CRM & vendas</h3><p>Leads chegam com contexto e podem seguir para a ferramenta comercial que sua equipe já utiliza.</p><span>RD Station · HubSpot · Pipedrive</span></article>
              <article className="ecosystem-card"><div className="ecosystem-icon">↗</div><h3>WhatsApp & relacionamento</h3><p>Transformamos o clique em conversa e conectamos jornadas de atendimento e automação.</p><span>WhatsApp Business · Manychat</span></article>
              <article className="ecosystem-card"><div className="ecosystem-icon">⌁</div><h3>Dados & inteligência</h3><p>Medimos comportamento, origem e conversões para entender o que merece ser ampliado.</p><span>GA4 · GTM · Search Console · Clarity</span></article>
              <article className="ecosystem-card"><div className="ecosystem-icon">✦</div><h3>Automação</h3><p>Processos repetitivos podem acontecer em segundo plano, conectando diferentes etapas da operação.</p><span>Make · n8n · Zapier</span></article>
              <article className="ecosystem-card"><div className="ecosystem-icon">◇</div><h3>Infraestrutura</h3><p>Hospedagem, banco de dados e performance ficam preparados para crescer sem virar preocupação diária.</p><span>Vercel · Supabase · cloud</span></article>
              <article className="ecosystem-card"><div className="ecosystem-icon">△</div><h3>Descoberta & performance</h3><p>Estrutura técnica e conteúdo trabalham para ampliar presença em busca e melhorar experiência.</p><span>SEO · performance · dados estruturados</span></article>
            </div>
          </div>
        </section>

        <section className="section" id="como">
          <div className="container">
            <div className="section-head">
              <div><span className="eyebrow dark">Como funciona</span><h2>Do entendimento à evolução contínua.</h2></div>
              <p>Você não precisa chegar com a solução pronta. Nosso trabalho começa entendendo o negócio e transformando essa realidade em uma operação digital melhor.</p>
            </div>

            <div className="steps">
              <article><span>01</span><h3>Entendemos</h3><p>Negócio, público, oferta, jornada e o que precisa melhorar.</p></article>
              <article><span>02</span><h3>Construímos</h3><p>Conteúdo, experiência, tecnologia e conexões necessárias.</p></article>
              <article><span>03</span><h3>Colocamos para operar</h3><p>Publicação, mensuração e caminhos de conversão entram no ar.</p></article>
              <article><span>04</span><h3>Evoluímos</h3><p>Novas oportunidades e melhorias entram no ciclo sem reconstruir tudo.</p></article>
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container trust-panel">
            <div className="trust-copy"><span className="eyebrow">O jeito Vimi</span><h2>Complexidade para nós. Clareza para você.</h2></div>
            <div className="trust-grid">
              <div className="trust-item"><b>Estratégia antes de ferramenta</b><p>A tecnologia entra para resolver o negócio — não para impressionar com jargão.</p></div>
              <div className="trust-item"><b>Uma operação conectada</b><p>Menos fornecedores isolados e mais continuidade entre site, marketing e vendas.</p></div>
              <div className="trust-item"><b>Evolução como rotina</b><p>O site não fica congelado após o lançamento; ele acompanha novas necessidades.</p></div>
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
