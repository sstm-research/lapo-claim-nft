"use client"

import { inAppWallet } from 'thirdweb/wallets';

import { thirdwebClient } from '@/utils/thirdweb/client';
import { zoraSepolia } from 'thirdweb/chains';
import {
  ConnectButton as ThirdWebConnectButton,
  darkTheme,
  useActiveAccount
} from "thirdweb/react";

const wallets = [
  inAppWallet({
    auth: {
      options: ["email", "google"],
    },
  }),
];

function ConnectButton() {
  const account = useActiveAccount()
  console.log({account})

  return (
    <ThirdWebConnectButton
        client={thirdwebClient}
        wallets={wallets}
        theme={darkTheme({
          colors: {
            accentText: "#57a63a",
            accentButtonBg: "#57a63a",
          },
        })}
        accountAbstraction={{
          chain: zoraSepolia, // chain where your smart accounts will be deployed
          factoryAddress: "0x8423A6BD8a8efeAD4Db30526FB15bA611E048340", // your deployed factory address
          gasless: true, // enable or disable gasless transactions
        }}
        connectModal={{
          size: "compact",
          showThirdwebBranding: false,
        }}
      />
  )
}

export default ConnectButton