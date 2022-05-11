import React, { useEffect, useState } from "react";
import { useContract, useProvider } from "wagmi";
import config from "../config";
import MintContract from "../contracts/MintNFT.json";

interface Props {
  id: number;
}

function NFTDetail(props: Props) {
  const provider = useProvider();
  const contract = useContract({
    addressOrName: config.MINT_NFT_CONTRACT_ADDRESS,
    contractInterface: MintContract.abi,
    signerOrProvider: provider,
  });

  const [owner, setOwner] = useState();

  useEffect(() => {
    contract.ownerOf(props.id).then((addr: any) => setOwner(addr));
  }, [contract]);

  return (
    <div style={{ marginLeft: "1rem" }}>
      <p>owner: {owner}</p>
    </div>
  );
}

export default NFTDetail;
