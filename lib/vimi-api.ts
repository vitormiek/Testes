export const VIMI_API = "https://rumgffucqegeuwvddbnc.supabase.co/functions/v1/vimi-public-api";

export async function getPublishedPosts() {
  const response = await fetch(VIMI_API + "?action=posts", { cache: "no-store" });
  if (!response.ok) throw new Error("Falha ao carregar conteúdo");
  return response.json();
}

export async function getBlogBanners() {
  const response = await fetch(VIMI_API + "?action=banners", { cache: "no-store" });
  if (!response.ok) throw new Error("Falha ao carregar banners");
  return response.json();
}

export async function submitLead(payload: Record<string, unknown>) {
  const response = await fetch(VIMI_API + "?action=lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Falha ao registrar lead");
  return data;
}
