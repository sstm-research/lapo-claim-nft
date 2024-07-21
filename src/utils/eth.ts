import { Address } from "thirdweb";

export const formatEthAddress = (address: string | Address) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};
