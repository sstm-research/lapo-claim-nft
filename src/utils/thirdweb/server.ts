import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  secretKey: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});
