import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export default function SolucoesPage(){
  return <>
    <MotionEffects/><SiteNav/>
    <main className="marketing-page">
      <section className="page-hero"><div className="container"><span className="eyebrow">Soluções Vimi</span><h1>Uma operação web que acompanha o negócio.</h1><p>Não entregamos apenas uma página bonita. Estruturamos presença, conversão, conexões e evolução contínua em torno do que sua empresa precisa alcançar.</p><a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a></div></section>
      <section className="section"><div className="container solution-detail-grid">
        <article className="solution-detail"><span>01</span><h2>Vimi Web</h2><h3>Presença digital que valoriza o negócio.</h3><p>Sites institucionais, landing pages, e-commerces e experiências digitais pensadas para transmitir autoridade, facilitar decisões e conduzir o usuário à ação.</p></article>
        <article className="solution-detail"><span>02</span><h2>Vimi Connect</h2><h3>Seu site deixa de trabalhar sozinho.</h3><p>Conectamos formulários, CRM, WhatsApp, dados e automações para que oportunidades não se percam entre ferramentas.</p></article>
        <article className="solution-detail"><span>03</span><h2>Vimi Care</h2><h3>O site continua vivo depois do lançamento.</h3><p>Atualizações, conteúdo, manutenção e infraestrutura entram em uma rotina de gestão, sem depender de um novo projeto para cada mudança.</p></article>
        <article className="solution-detail"><span>04</span><h2>Vimi Growth</h2><h3>Evolução orientada pelo que realmente acontece.</h3><p>Performance, SEO, comportamento e conversão ajudam a identificar oportunidades de melhoria e novos caminhos para crescer.</p></article>
      </div></section>
      <section className="section soft"><div className="container centered-cta"><span className="eyebrow dark">Uma solução, não um pacote fechado</span><h2>A combinação certa depende do seu momento.</h2><p>A Vimi organiza o que faz sentido agora e deixa a estrutura pronta para evoluir depois.</p><a className="pill primary" href="/#diagnostico">Descobrir meu caminho <span>↗</span></a></div></section>
    </main>
    <SiteFooter/>
  </>;
}