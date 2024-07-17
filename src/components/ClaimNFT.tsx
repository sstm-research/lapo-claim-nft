"use client";

import { formatEthAddress } from "@/utils/eth";
import { thirdwebClient } from "@/utils/thirdweb/client";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { getContract } from "thirdweb";
import { zoraSepolia } from "thirdweb/chains";
import {
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import ConnectButton from "./ConnectButton";
import DisplayNFT from "./DisplayNFT";

const contract = getContract({
  address: "0xF3C3177058C3591D4931FF979F3900eEd816D7fe",
  chain: zoraSepolia,
  client: thirdwebClient,
});

function ClaimNFT() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  const { disconnect } = useDisconnect();
  console.log(account && account.address);
  const [sendindRequest, setSendingRequest] = useState(false);

  // const nfts = useOwnedNfts(contract, account?.address);
  // console.log({nfts})

  return (
    <>
      {account && wallet ? (
        <>
          <Text
            onClick={() => {
              disconnect(wallet);
            }}
            className="absolute cursor-pointer bottom-4 font-bold text-sm font-mono"
          >
            logout
          </Text>
          <Text className="font-bold text-2xl font-mono">
            {formatEthAddress(account.address)}
          </Text>
          <DisplayNFT address={account.address} />
        </>
      ) : (
        <div
          className={`
          ease-in-out active:scale-95
          shadow-md rounded-xl
          hover:scale-105 hover:shadow-lg focus:scale-105
      `}
        >
          <ConnectButton />
        </div>
      )}
    </>
  );
}

export default ClaimNFT;
