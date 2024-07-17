import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  if (!data.uuid) {
    return NextResponse.json({ error: "No NFT found" }, { status: 400 });
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

  // const contractAddress = await deployERC721Contract({
  //   chain: baseSepolia,
  //   client: serverClient,
  //   account: wallet,
  //   type: "DropERC721",
  //   params: {
  //     name: "MyNFT",
  //     description: "My NFT contract",
  //     symbol: "NFT",
  //   },
  // });

  // console.log(contractAddress)

  // await supabase
  //   .from("NFTs")
  //   .update({ minted: true, address: contractAddress })
  //   .eq("id", nft.id);
    
  return NextResponse.json(nft);
}
