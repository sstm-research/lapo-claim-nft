"use client";

import { formatEthAddress } from "@/utils/eth";
import {
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import ConnectButton from "./ConnectButton";
import DisplayNFT from "./DisplayNFT";

function ClaimNFT() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  const { disconnect } = useDisconnect();
  console.log(account && account.address);

  return (
    <>
      {account && wallet ? (
        <>
          <p
            onClick={() => {
              disconnect(wallet);
            }}
            className="absolute cursor-pointer bottom-4 font-bold text-sm font-mono"
          >
            logout
          </p>
          <p className="font-bold text-2xl font-mono">
            {formatEthAddress(account.address)}
          </p>
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
