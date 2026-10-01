const tools = [
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/747E8E" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/747E8E" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/747E8E" },
  { name: "Codex", icon: "https://cdn.simpleicons.org/openai/747E8E" },
  { name: "ActiveCampaign", icon: "https://cdn.simpleicons.org/activecampaign/747E8E" },
  { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/747E8E" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta/747E8E" },
  { name: "WhatsApp Business", icon: "https://cdn.simpleicons.org/whatsapp/747E8E" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/747E8E" },
  { name: "Google", icon: "https://cdn.simpleicons.org/google/747E8E" }
];

function ToolCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="stack-logo-card">
      <img src={icon} alt="" loading="lazy" />
      <span>{name}</span>
    </div>
  );
}

export function EcosystemStackMarquee() {
  const rowOne = tools;
  const rowTwo = [...tools.slice(5), ...tools.slice(0, 5)];

  return (
    <section className="ecosystem-stack-section" aria-labelledby="ecosystem-stack-title">
      <div className="container">
        <div className="ecosystem-stack-head">
          <span className="eyebrow dark">Tecnologia que sustenta a operação</span>
          <h2 id="ecosystem-stack-title">Tecnologia que trabalha nos bastidores.</h2>
          <p>
            A Vimi combina ferramentas modernas e consolidadas para construir sites,
            integrações e operações digitais com mais inteligência, estabilidade e
            capacidade de evolução.
          </p>
        </div>

        <div className="stack-marquee-window" aria-label="Tecnologias utilizadas pela Vimi">
          <div className="stack-marquee-row row-forward">
            <div className="stack-marquee-group">
              {rowOne.map((tool, index) => <ToolCard {...tool} key={"a1-" + tool.name + "-" + index} />)}
            </div>
            <div className="stack-marquee-group" aria-hidden="true">
              {rowOne.map((tool, index) => <ToolCard {...tool} key={"a2-" + tool.name + "-" + index} />)}
            </div>
          </div>
          <div className="stack-marquee-row row-reverse">
            <div className="stack-marquee-group">
              {rowTwo.map((tool, index) => <ToolCard {...tool} key={"b1-" + tool.name + "-" + index} />)}
            </div>
            <div className="stack-marquee-group" aria-hidden="true">
              {rowTwo.map((tool, index) => <ToolCard {...tool} key={"b2-" + tool.name + "-" + index} />)}
            </div>
          </div>
        </div>

        <div className="ecosystem-stack-foot">
          <p>Infraestrutura, dados, automação, análise e canais trabalhando em conjunto.</p>
          <a href="#ecossistema-modulos">Ver como conectamos tudo <span>↘</span></a>
        </div>
      </div>
    </section>
  );
}
