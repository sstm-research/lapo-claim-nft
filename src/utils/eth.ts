import { Address } from "thirdweb";

export const formatEthAddress = (address: string | Address) => {
  return address.slice(0, 4) + "..." + address.slice(-4);
};
