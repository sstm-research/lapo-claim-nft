"use client";

import { inAppWallet } from "thirdweb/wallets";

import { thirdwebClient } from "@/utils/thirdweb/client";
import { zoraSepolia } from "thirdweb/chains";
import { ConnectButton as ThirdWebConnectButton } from "thirdweb/react";

const wallets = [
  inAppWallet({
    auth: {
      options: ["email", "google"],
    },
  }),
];

function ConnectButton() {
  return (
    <ThirdWebConnectButton
      connectButton={{
        label: "Conectar",
      }}
      client={thirdwebClient}
      wallets={wallets}
      accountAbstraction={{
        chain: zoraSepolia,
        factoryAddress: "0x8423A6BD8a8efeAD4Db30526FB15bA611E048340",
        gasless: true,
      }}
      connectModal={{
        size: "compact",
        showThirdwebBranding: false,
      }}
    />
  );
}

export default ConnectButton;
