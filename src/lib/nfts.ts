"use server";

import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getNftByUuid(uuid: string, supabase?: SupabaseClient) {
  if (!supabase) supabase = createClient();

  const { data: nft } = await supabase
    .from("NFTs")
    .select()
    .eq("uuid", uuid)
    .single();

  return nft;
}
