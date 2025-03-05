import { supabase } from "../SupabaseClient";

export async function load() {
  const { data } = await supabase.from("works").select();
  return {
    works: data ?? [],
  };
}