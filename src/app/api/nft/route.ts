import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.uuid) {
    return NextResponse.json({ error: "No UUID found" }, { status: 400 });
  }

  if (!data.address) {
    return NextResponse.json({ error: "No Address found" }, { status: 400 });
  }

  const supabase = createClient();
  const { data: nft } = await supabase
    .from("NFTs")
    .select()
    .eq("uuid", data.uuid)
    .limit(1)
    .single();

  if (!nft) {
    return NextResponse.json({ error: "No NFT found" }, { status: 404 });
  }

  const teste = await supabase
    .from("NFTs")
    .update({ owner: data.address })
    .eq("id", nft.id);

  return NextResponse.json(teste);
}
