import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const segments=[
  ["Serviços profissionais","Quando confiança e diferenciação são decisivas, o site precisa explicar valor com clareza e transformar autoridade em conversas qualificadas.","Consultorias · escritórios · especialistas"],
  ["Educação","Jornadas diferentes por curso, campanha ou público pedem páginas e fluxos que facilitem descoberta, interesse e captação.","Escolas · faculdades · cursos"],
  ["Saúde & clínicas","A experiência digital precisa transmitir confiança, organizar serviços e tornar mais simples o caminho entre pesquisa e contato.","Clínicas · centros médicos · saúde"],
  ["Imobiliário & construção","Empreendimentos e projetos complexos ganham uma apresentação mais visual, organizada e preparada para capturar interesse comercial.","Construtoras · imobiliárias · urbanismo"],
  ["Negócios locais em expansão","Quando a empresa cresce, uma presença básica deixa de representar sua estrutura, reputação e ambição.","Serviços · varejo · operações regionais"],
  ["B2B & empresas em crescimento","Ciclos de venda consultivos exigem conteúdo, contexto e conexão entre marketing e comercial.","Indústria · tecnologia · serviços B2B"]
];

export default function SegmentosPage(){
  return <>
    <MotionEffects/><SiteNav/>
    <main className="marketing-page">
      <section className="page-hero page-hero-light"><div className="container"><span className="eyebrow dark">Segmentos</span><h1>Não existe um site ideal para todo negócio.</h1><p>A Vimi parte da forma como sua empresa vende, se relaciona e gera valor para desenhar uma presença digital compatível com essa realidade.</p><a className="pill primary" href="/#diagnostico">Falar sobre meu negócio <span>↗</span></a></div></section>
      <section className="section"><div className="container segment-page-grid">{segments.map(([title,text,tags],i)=><article className="segment-page-card" key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p><b>{tags}</b></article>)}</div></section>
      <section className="section dark-section"><div className="container centered-cta dark-copy"><span className="eyebrow">Mais importante que o setor</span><h2>É entender como o seu cliente decide.</h2><p>Mesmo dentro de um mesmo segmento, empresas diferentes possuem jornadas, ofertas e maturidades diferentes. É isso que orienta a solução.</p><a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a></div></section>
    </main>
    <SiteFooter/>
  </>;
}