"use client";

import { thirdwebClient } from "@/utils/thirdweb/client";
import { getContract } from "thirdweb";
import { zoraSepolia } from "thirdweb/chains";
import { claimTo, getOwnedNFTs } from "thirdweb/extensions/erc1155";
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import ConnectButton from "./ConnectButton";

const contract = getContract({
  address: "0xF3C3177058C3591D4931FF979F3900eEd816D7fe",
  chain: zoraSepolia,
  client: thirdwebClient,
});

function OwnedNfts({ address }: { address: string }) {
  const ownedNFTs = useReadContract(getOwnedNFTs, {
    contract,
    address: address,
  });
  console.log({ ownedNFTs });
  return <p>You have {ownedNFTs.data?.length} NFTs</p>
}

function ClaimNFT() {
  const account = useActiveAccount();
  console.log(account && account.address);

  return (
    <>
      <ConnectButton />
      {account && <OwnedNfts address={account.address} />}
      <TransactionButton
        transaction={() =>
          claimTo({
            contract,
            tokenId: BigInt(2),
            to: account?.address!,
            quantity: BigInt(1),
          })
        }
        onError={(error) => alert(`Error: ${error.message}`)}
        onTransactionConfirmed={async () => {
          alert("NFT Claimed!");
        }}
      >
        Claim
      </TransactionButton>
    </>
  );
}

export default ClaimNFT;
