"use client";

import { thirdwebClient } from "@/utils/thirdweb/client";
import { MediaRenderer } from "thirdweb/react";

interface NftRenderProps {
  src: string;
}

function NftRender(props: NftRenderProps) {
  return <MediaRenderer src={props.src} client={thirdwebClient} />;
}

export default NftRender;
