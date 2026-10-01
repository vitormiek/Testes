"use client";

type StackTool = {
  name: string;
  icon?: string;
  fallback: string;
  wide?: boolean;
};

const si = (slug: string) =>
  "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/" + slug + ".svg";

const tools: StackTool[] = [
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/747E8E", fallback: "V" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/747E8E", fallback: "S" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/747E8E", fallback: "GH" },

  /* Switched away from cdn.simpleicons.org for the two marks that were
     returning broken images in production. */
  { name: "Codex", icon: si("openai"), fallback: "✣" },
  { name: "ActiveCampaign", icon: "/logos/stack/activecampaign.svg", fallback: "AC" },

  { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/747E8E", fallback: "GA" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta/747E8E", fallback: "M" },
  { name: "WhatsApp Business", icon: "https://cdn.simpleicons.org/whatsapp/747E8E", fallback: "WA" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/747E8E", fallback: "n8n" },
  { name: "Google", icon: "https://cdn.simpleicons.org/google/747E8E", fallback: "G" },

  { name: "RD Station", icon: "/logos/stack/rd-station.svg", fallback: "RD" },
  { name: "Mailchimp", icon: si("mailchimp"), fallback: "M" },
  { name: "Manychat", icon: "/logos/stack/manychat.svg", fallback: "MC", wide: true },
  { name: "HubSpot", icon: si("hubspot"), fallback: "HS" },

  /* Reportei does not have a dependable public icon endpoint in the stack,
     so the card uses a neutral brand monogram instead of risking a broken mark. */
  { name: "Reportei", icon: "https://images.mindcloud.co/apps/icons/reportei_1774885696716.png", fallback: "R" }
];

function ToolCard({ name, icon, fallback, wide }: StackTool) {
  return (
    <div className="stack-logo-card">
      <span className={"stack-logo-mark" + (icon ? "" : " fallback") + (wide ? " wide" : "")}>
        {icon && (
          <img
            src={icon}
            alt=""
            loading="lazy"
            onError={(event) => event.currentTarget.parentElement?.classList.add("fallback")}
          />
        )}
        <b className="stack-logo-fallback" aria-hidden="true">{fallback}</b>
      </span>
      <span>{name}</span>
    </div>
  );
}

export function EcosystemStackMarquee() {
  const rowOne = tools;
  const rowTwo = [...tools.slice(7), ...tools.slice(0, 7)];

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
