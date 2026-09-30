import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const groups=[
  ["CRM & vendas","Fazemos o site entregar mais contexto para o comercial e conversar com a ferramenta usada para organizar oportunidades.","RD Station · HubSpot · Pipedrive"],
  ["WhatsApp & relacionamento","Criamos caminhos entre páginas, formulários, atendimento e conversas para reduzir atrito na jornada.","WhatsApp Business · Manychat"],
  ["Dados & inteligência","Acompanhamos origem, comportamento e conversão para que decisões de marketing não dependam apenas de percepção.","GA4 · GTM · Search Console · Clarity"],
  ["Automação","Conectamos eventos e sistemas para que processos repetitivos possam acontecer com menos intervenção manual.","Make · n8n · Zapier"],
  ["Infraestrutura","Hospedagem, banco de dados e entrega de conteúdo ficam preparados para crescer com segurança e performance.","Vercel · Supabase · cloud"],
  ["Descoberta & performance","Estrutura técnica, conteúdo e velocidade ajudam a melhorar experiência e presença em mecanismos de descoberta.","SEO · dados estruturados · performance"]
];

export default function EcossistemaPage(){
  return <>
    <MotionEffects/><SiteNav/>
    <main className="marketing-page">
      <section className="page-hero"><div className="container"><span className="eyebrow">Ecossistema Vimi</span><h1>Tecnologia por trás. Simplicidade na frente.</h1><p>Você não precisa administrar uma pilha de ferramentas. A Vimi organiza as conexões necessárias para que sua presença digital funcione como uma operação única.</p><a className="pill primary" href="/#diagnostico">Quero conectar minha operação <span>↗</span></a></div></section>
      <section className="section"><div className="container ecosystem-page-grid">{groups.map(([title,text,tools])=><article className="ecosystem-page-card" key={title}><div className="ecosystem-orbit"></div><h2>{title}</h2><p>{text}</p><span>{tools}</span></article>)}</div></section>
      <section className="section soft"><div className="container tech-explainer"><div><span className="eyebrow dark">Sem jargão desnecessário</span><h2>A ferramenta é meio. O resultado é o que importa.</h2></div><p>Não empurramos tecnologia porque está na moda. Escolhemos e conectamos o que fizer sentido para a operação, o orçamento e a maturidade da empresa.</p></div></section>
      <section className="section"><div className="container centered-cta"><span className="eyebrow dark">Já usa alguma dessas ferramentas?</span><h2>Ótimo. A Vimi pode trabalhar ao redor do que já funciona.</h2><p>E, quando algo precisa mudar, estruturamos a transição sem transformar a tecnologia em protagonista da conversa.</p><a className="pill primary" href="/#diagnostico">Contar como funciona hoje <span>↗</span></a></div></section>
    </main>
    <SiteFooter/>
  </>;
}