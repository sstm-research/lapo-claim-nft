import { contract } from "@/contracts/edition";
import { thirdwebClient } from "@/utils/thirdweb/client";
import { claimTo, getOwnedNFTs } from "thirdweb/extensions/erc1155";
import {
  MediaRenderer,
  TransactionButton,
  useReadContract,
} from "thirdweb/react";

function DisplayNFT({ address }: { address: string }) {
  const { data: nfts } = useReadContract(getOwnedNFTs, {
    contract,
    address,
  });

  console.log(nfts);
  return nfts?.length ? (
    <MediaRenderer client={thirdwebClient} src={nfts[0].metadata.image!} />
  ) : (
    <div
      className={`
          ease-in-out active:scale-95
          shadow-md rounded-xl
          hover:scale-105 hover:shadow-lg focus:scale-105
      `}
    >
      <TransactionButton
        transaction={() =>
          claimTo({
            contract,
            tokenId: BigInt(2),
            to: address,
            quantity: BigInt(1),
          })
        }
        onError={(error) => {
          alert(`Error: ${error.message}`);
        }}
        onTransactionConfirmed={async () => {
          alert("NFT Claimed!");
        }}
      >
        Claim
      </TransactionButton>
    </div>
  );
}

export default DisplayNFT;
