import { MotionEffects } from "@/components/MotionEffects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const segments=[
  {
    title:"Serviços profissionais",
    text:"Quando confiança e diferenciação são decisivas, o site precisa explicar valor com clareza e transformar autoridade em conversas qualificadas.",
    tags:"Consultorias · escritórios · especialistas",
    image:"https://images.pexels.com/photos/7841456/pexels-photo-7841456.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title:"Educação",
    text:"Jornadas diferentes por curso, campanha ou público pedem páginas e fluxos que facilitem descoberta, interesse e captação.",
    tags:"Escolas · faculdades · cursos",
    image:"https://images.pexels.com/photos/8617940/pexels-photo-8617940.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title:"Saúde & clínicas",
    text:"A experiência digital precisa transmitir confiança, organizar serviços e tornar mais simples o caminho entre pesquisa e contato.",
    tags:"Clínicas · centros médicos · saúde",
    image:"https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title:"Imobiliário & construção",
    text:"Empreendimentos e projetos complexos ganham uma apresentação mais visual, organizada e preparada para capturar interesse comercial.",
    tags:"Construtoras · imobiliárias · urbanismo",
    image:"https://images.pexels.com/photos/8837722/pexels-photo-8837722.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title:"Negócios locais em expansão",
    text:"Quando a empresa cresce, uma presença básica deixa de representar sua estrutura, reputação e ambição.",
    tags:"Serviços · varejo · operações regionais",
    image:"https://images.pexels.com/photos/5413992/pexels-photo-5413992.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title:"B2B & empresas em crescimento",
    text:"Ciclos de venda consultivos exigem conteúdo, contexto e conexão entre marketing e comercial.",
    tags:"Indústria · tecnologia · serviços B2B",
    image:"https://images.pexels.com/photos/7163395/pexels-photo-7163395.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

export default function SegmentosPage(){
  return <>
    <MotionEffects/><SiteNav/>
    <main className="marketing-page segments-page">
      <section className="page-hero page-hero-light">
        <div className="container">
          <span className="eyebrow dark">Segmentos</span>
          <h1>Não existe um site ideal para todo negócio.</h1>
          <p>A Vimi parte da forma como sua empresa vende, se relaciona e gera valor para desenhar uma presença digital compatível com essa realidade.</p>
          <a className="pill primary" href="/#diagnostico">Falar sobre meu negócio <span>↗</span></a>
        </div>
      </section>

      <section className="section">
        <div className="container segment-page-grid segment-photo-grid">
          {segments.map((segment,i)=>
            <article className="segment-page-card segment-photo-card" key={segment.title}>
              <div className="segment-photo">
                <img src={segment.image} alt="" loading="lazy" />
                <span>0{i+1}</span>
              </div>
              <div className="segment-photo-copy">
                <h2>{segment.title}</h2>
                <p>{segment.text}</p>
                <b>{segment.tags}</b>
                <a href="/#diagnostico">Explorar este cenário ↗</a>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="section dark-section">
        <div className="container centered-cta dark-copy">
          <span className="eyebrow">Mais importante que o setor</span>
          <h2>É entender como o seu cliente decide.</h2>
          <p>Mesmo dentro de um mesmo segmento, empresas diferentes possuem jornadas, ofertas e maturidades diferentes. É isso que orienta a solução.</p>
          <a className="pill primary" href="/#diagnostico">Conte seu cenário <span>↗</span></a>
        </div>
      </section>
    </main>
    <SiteFooter/>
  </>;
}