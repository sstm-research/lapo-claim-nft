import { privateKeyToAccount } from "thirdweb/wallets";
import { serverClient } from "./server";
 
export const wallet = privateKeyToAccount({
  client: serverClient,
  privateKey: process.env.WALLET_PRIVATE_KEY!,
});