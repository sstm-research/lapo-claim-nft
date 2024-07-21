import ClaimNFT from "@/components/ClaimNFT";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data: nfts } = await supabase.from("NFTs").select().order("id");
  console.log(nfts);

  return (
    <main className="mx-auto w-full h-screen flex flex-col gap-4 justify-center items-center">
      <ClaimNFT />
    </main>
  );
}
