const modal=document.getElementById("leadModal");
const body=document.getElementById("wizardBody");
const progress=document.getElementById("progress");
let step=0;
const steps=[
 {q:"O que você precisa agora?",p:"Escolha o cenário que mais se aproxima do seu momento.",opts:["Criar um site do zero","Refazer meu site atual","Melhorar performance e conversão","Integrar site, CRM e automações"]},
 {q:"Qual é o principal objetivo?",p:"Isso nos ajuda a pensar a arquitetura certa.",opts:["Gerar mais leads","Apresentar melhor a empresa","Vender serviços ou produtos","Organizar a operação digital"]},
 {q:"Como está sua estrutura hoje?",p:"Não precisa ter certeza técnica.",opts:["Tenho site, mas está desatualizado","Tenho site e CRM","Tenho várias ferramentas desconectadas","Estou começando do zero"]}
];
function render(){
 progress.style.width=((step+1)/4*100)+"%";
 if(step<3){
   const s=steps[step];
   body.innerHTML='<div class="question"><h3>'+s.q+'</h3><p>'+s.p+'</p><div class="opts">'+s.opts.map(o=>'<button class="opt">'+o+'</button>').join("")+'</div></div>';
   body.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{step++;render()});
 } else {
   body.innerHTML='<div class="question"><h3>Onde podemos falar com você?</h3><p>Nesta fase o protótipo valida a experiência; a integração com CRM entra na V1.</p><form id="leadForm"><div class="fields"><input required placeholder="Seu nome"><input required type="email" placeholder="Seu e-mail"><input placeholder="Empresa"><input placeholder="WhatsApp"></div><button class="btn primary" style="margin-top:16px" type="submit">Concluir diagnóstico <span>↗</span></button></form></div>';
   document.getElementById("leadForm").onsubmit=e=>{
     e.preventDefault();
     body.innerHTML='<div class="success"><div class="check">✓</div><h3>Diagnóstico concluído.</h3><p>Na V1 este fluxo será conectado ao CRM e às automações da Vimi.</p></div>';
   };
 }
}
document.querySelectorAll(".js-start").forEach(x=>x.addEventListener("click",e=>{e.preventDefault();step=0;render();modal.classList.add("open")}));
document.getElementById("closeModal").onclick=()=>modal.classList.remove("open");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("on")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));