"use client";

import { formatEthAddress } from "@/utils/eth";
import { thirdwebClient } from "@/utils/thirdweb/client";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { getContract } from "thirdweb";
import { zoraSepolia } from "thirdweb/chains";
import { claimTo, getOwnedNFTs } from "thirdweb/extensions/erc1155";
import {
  TransactionButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
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
  return <p>You have {ownedNFTs.data?.length} NFTs</p>;
}

function ClaimNFT() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  const { disconnect } = useDisconnect();
  console.log(account && account.address);
  const [sendindRequest, setSendingRequest] = useState(false);

  return (
    <>
      {account && wallet && 
        <>
          <Text onClick={()=>{disconnect(wallet)}} className="absolute cursor-pointer bottom-4 font-bold text-sm font-mono">
            logout
          </Text>
          <Text className="font-bold text-2xl font-mono">
            {formatEthAddress(account.address)}
          </Text>
        </>
      }
      <div
        className={`
          ease-in-out active:scale-95
          shadow-md rounded-xl
          hover:scale-105 hover:shadow-lg focus:scale-105
          ${sendindRequest ? "" : ""}
        `}
      >
        {account ? (
          <TransactionButton
            transaction={() =>
              claimTo({
                contract,
                tokenId: BigInt(2),
                to: account?.address!,
                quantity: BigInt(1),
              })
            }
            onClick={() => setSendingRequest(true)}
            onError={(error) => {
              setSendingRequest(false);
              alert(`Error: ${error.message}`);
            }}
            onTransactionConfirmed={async () => {
              alert("NFT Claimed!");
            }}
          >
            Claim
          </TransactionButton>
        ) : (
          <ConnectButton />
        )}
      </div>
    </>
  );
}

export default ClaimNFT;
