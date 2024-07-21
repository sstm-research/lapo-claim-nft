import { privateKeyToAccount } from "thirdweb/wallets";
import { twServerClient } from "./server";

export const wallet = privateKeyToAccount({
  client: twServerClient,
  privateKey: process.env.WALLET_PRIVATE_KEY!,
});
