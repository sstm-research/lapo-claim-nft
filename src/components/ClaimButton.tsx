"use client";

import { formatEthAddress } from "@/utils/eth";
import { useState } from "react";
import { Address, ContractOptions } from "thirdweb";
import { claimTo } from "thirdweb/extensions/erc1155";
import { TransactionButton, useActiveAccount } from "thirdweb/react";
import ConnectButton from "./ConnectButton";

interface ClaimButtonProps {
  contract: ContractOptions;
  tokenId: bigint;
  quantity: bigint;
  uuid: string;
  owner?: Address;
}

function ClaimButton(props: ClaimButtonProps) {
  const account = useActiveAccount();
  const [owner, setOwner] = useState(props.owner);

  if (owner) {
    return (
      <p>
        Proprietário:{" "}
        <span className="font-bold">{formatEthAddress(owner)}</span>
        {owner === account?.address && <span> (você)</span>}
      </p>
    );
  }

  if (!account) {
    return <ConnectButton />;
  }

  return (
    <TransactionButton
      transaction={() =>
        claimTo({
          contract: props.contract,
          tokenId: props.tokenId,
          to: account.address,
          quantity: props.quantity,
        })
      }
      onError={(error) => {
        alert(`Error: ${error.message}`);
      }}
      onTransactionConfirmed={async () => {
        const res = await fetch("/api/NFT", {
          method: "POST",
          body: JSON.stringify({ uuid: props.uuid, address: account.address }),
          headers: {
            "content-type": "application/json",
          },
        });
        if (res.ok) {
          setOwner(account.address as Address);
        }
      }}
    >
      Resgatar
    </TransactionButton>
  );
}

export default ClaimButton;
