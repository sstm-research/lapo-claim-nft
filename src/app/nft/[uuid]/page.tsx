import { createClient } from "@/utils/supabase/server";
import { twServerClient } from "@/utils/thirdweb/server";
import { notFound } from "next/navigation";
import { getContract } from "thirdweb";
import { zoraSepolia } from "thirdweb/chains";
import { getNFT } from "thirdweb/extensions/erc1155";
import { MediaRenderer } from "thirdweb/react";

async function NftPage({ params }: { params: { uuid: string } }) {
  const supabase = createClient();

  const { data: supaNft } = await supabase
    .from("NFTs")
    .select()
    .eq("uuid", params.uuid)
    .single();

  if (!supaNft) {
    notFound();
  }

  const contract = getContract({
    chain: zoraSepolia,
    address: supaNft.address,
    client: twServerClient,
  });

  const nft = await getNFT({
    contract,
    tokenId: BigInt(supaNft.token_id),
  });

  return (
    <div
      className={`
        bg-black text-[#B1FD00]
        h-screen flex gap-12
        items-center justify-center
      `}
    >
      <MediaRenderer src={nft.metadata.image} client={twServerClient} />
      <pre>
        {JSON.stringify(
          {
            id: nft.id.toString(),
            metadata: nft.metadata,
            owner: nft.owner,
            tokenURI: nft.tokenURI,
            type: nft.type,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
}

export default NftPage;
