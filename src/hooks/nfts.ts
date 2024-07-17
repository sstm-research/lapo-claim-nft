import { ContractOptions } from "thirdweb";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import { useReadContract } from "thirdweb/react";

export function useOwnedNfts(
  contract: Readonly<ContractOptions<[]>>,
  address?: string,
) {
  if (address) {
    return useReadContract(getOwnedNFTs, {
      contract,
      address,
    });
  } else {
    return [];
  }
}
