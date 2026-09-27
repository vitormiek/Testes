import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { VIMI_API } from "@/lib/vimi-api";

let client: SupabaseClient | null = null;

export async function getAdminSupabase() {
  if (client) return client;
  const response = await fetch(VIMI_API + "?action=client-config");
  if (!response.ok) throw new Error("Configuração indisponível");
  const config = await response.json();
  client = createClient(config.url, config.key);
  return client;
}
