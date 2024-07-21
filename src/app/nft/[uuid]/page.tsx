import ClaimButton from "@/components/ClaimButton";
import { PROJECT_URL } from "@/utils/constants";
import { createClient } from "@/utils/supabase/server";
import { twServerClient } from "@/utils/thirdweb/server";
import { notFound } from "next/navigation";
import QRCode from "react-qr-code";
import { Address, getContract } from "thirdweb";
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

  console.log(nft);

  return (
    <div
      className={`
        h-screen flex flex-col gap-6 p-4
        items-center justify-center
        overflow-x-hidden
      `}
    >
      <QRCode
        size={128}
        bgColor="black"
        fgColor="#B1FD00"
        value={`${PROJECT_URL}/nft/650b549d-374e-4bcf-9f8e-edfe3ecbfdcb`}
        className="hidden md:visible"
      />
      <MediaRenderer src={nft.metadata.image} client={twServerClient} />

      <ClaimButton
        contract={contract}
        quantity={BigInt(1)}
        tokenId={BigInt(supaNft.token_id)}
        owner={supaNft.owner as Address}
        uuid={params.uuid}
      />
    </div>
  );
}

export default NftPage;
