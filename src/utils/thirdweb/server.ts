import { createThirdwebClient } from "thirdweb";

export const twServerClient = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY!,
});
