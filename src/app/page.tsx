import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data: nfts } = await supabase.from("NFTs").select();
  console.log(nfts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        nfts && nfts.length ? nfts.map(nft => (
          <div key={nft.id}>
            <p>{nft.id}</p>
            <p>{nft.title}</p>
            <p>{nft.image}</p>
          </div>
        )) : (
          <p>Nenhuma NFT foi encontrada</p>
        )
      }
    </main>
  );
}
