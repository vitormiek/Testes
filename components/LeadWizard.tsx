"use client";

import { FormEvent, useMemo, useState } from "react";
import { submitLead } from "@/lib/vimi-api";

const choices = [
  {
    key: "need",
    title: "O que você precisa agora?",
    options: ["Criar um site do zero", "Refazer meu site atual", "Melhorar performance e conversão", "Integrar site, CRM e automações"]
  },
  {
    key: "goal",
    title: "Qual é o principal objetivo?",
    options: ["Gerar mais leads", "Apresentar melhor a empresa", "Vender serviços ou produtos", "Organizar a operação digital"]
  },
  {
    key: "maturity",
    title: "Como está sua estrutura hoje?",
    options: ["Tenho site, mas está desatualizado", "Tenho site e CRM", "Tenho várias ferramentas desconectadas", "Estou começando do zero"]
  }
] as const;

export function LeadWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle"|"sending"|"done"|"error">("idle");
  const progress = useMemo(() => Math.min(100, ((step + 1) / 4) * 100), [step]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = new FormData(event.currentTarget);
    const params = new URLSearchParams(window.location.search);

    try {
      await submitLead({
        need: answers.need || null,
        goal: answers.goal || null,
        maturity: answers.maturity || null,
        name: form.get("name"),
        email: form.get("email"),
        company: form.get("company") || null,
        whatsapp: form.get("whatsapp") || null,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        landing_page: window.location.pathname,
        metadata: { referrer: document.referrer || null }
      });
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="lead-success">
        <div className="success-icon">✓</div>
        <span className="eyebrow">Diagnóstico recebido</span>
        <h3>Agora temos contexto para uma conversa melhor.</h3>
        <p>Seu cenário já foi registrado na base comercial da Vimi. A próxima camada conecta este fluxo ao CRM.</p>
      </div>
    );
  }

  return (
    <div className="wizard">
      <div className="wizard-top">
        <div>
          <span className="eyebrow dark">Vimi Match</span>
          <h3>Conte o cenário. Nós organizamos o próximo passo.</h3>
        </div>
        <span className="step-label">{Math.min(step + 1, 4)} / 4</span>
      </div>

      <div className="progress"><i style={{ width: progress + "%" }} /></div>

      {step < 3 ? (
        <div className="question">
          <h4>{choices[step].title}</h4>
          <div className="options">
            {choices[step].options.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => {
                  setAnswers((current) => ({ ...current, [choices[step].key]: option }));
                  setStep((current) => current + 1);
                }}
              >
                <span>{option}</span><b>↗</b>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form className="lead-form" onSubmit={submit}>
          <div className="field-grid">
            <label>Seu nome<input name="name" required placeholder="Como podemos chamar você?" /></label>
            <label>E-mail<input name="email" required type="email" placeholder="voce@empresa.com" /></label>
            <label>Empresa<input name="company" placeholder="Nome da empresa" /></label>
            <label>WhatsApp<input name="whatsapp" placeholder="(00) 00000-0000" /></label>
          </div>

          <div className="form-footer">
            <button type="button" className="back" onClick={() => setStep(2)}>← Voltar</button>
            <button className="pill primary" type="submit" disabled={state === "sending"}>
              {state === "sending" ? "Enviando…" : "Concluir diagnóstico"} <span>↗</span>
            </button>
          </div>
          {state === "error" && <p className="error-msg">Não foi possível registrar agora. Tente novamente em instantes.</p>}
        </form>
      )}
    </div>
  );
}
