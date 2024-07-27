import ClaimButton from "@/components/ClaimButton";
import NftRender from "@/components/NftRender";
import { getNftByUuid } from "@/lib/nfts";
import { twServerClient } from "@/utils/thirdweb/server";
import { notFound } from "next/navigation";
import { Address, getContract } from "thirdweb";
import { zoraSepolia } from "thirdweb/chains";
import { getNFT } from "thirdweb/extensions/erc1155";

async function NftPage({ params }: { params: { uuid: string } }) {
  const supaNft = await getNftByUuid(params.uuid);

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
        h-screen flex flex-col gap-6 p-4
        items-center justify-center
        overflow-x-hidden
      `}
    >
      {nft.metadata.image && <NftRender src={nft.metadata.image} />}
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
