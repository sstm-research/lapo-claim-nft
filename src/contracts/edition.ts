import { thirdwebClient } from "@/utils/thirdweb/client";
import { getContract } from "thirdweb";
import { zoraSepolia } from "thirdweb/chains";

export const contract = getContract({
  address: "0xF3C3177058C3591D4931FF979F3900eEd816D7fe",
  chain: zoraSepolia,
  client: thirdwebClient,
});