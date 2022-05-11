import { BigNumber } from "@ethersproject/bignumber";
import React, { useEffect, useState } from "react";
import { useContract, useProvider } from "wagmi";
import config from "../config";
import MintContract from "../contracts/MintNFT.json";
import NFTDetail from "./NFTDetail";

function NFTListing() {
  const provider = useProvider();
  const contract = useContract({
    addressOrName: config.MINT_NFT_CONTRACT_ADDRESS,
    contractInterface: MintContract.abi,
    signerOrProvider: provider,
  });

  const [tokens, setTokens] = useState<RenderToken[]>();

  useEffect(() => {
    contract.getAlltoken().then((tokens: RenderToken[]) => setTokens(tokens));
  }, [contract]);

  return (
    <>
      <h2>Browse NFTs</h2>
      {tokens && (
        <>
          <h3>Found Contract. {tokens.length} NFTs registered</h3>
          {tokens?.map((it) => (
            <div key={it.id.toString()}>
              NFT #{it.id.toString()} - uri: "{it.uri}"
              <NFTDetail id={it.id.toNumber()} />
            </div>
          ))}
        </>
      )}
      <hr />
    </>
  );
}

export default NFTListing;

interface RenderToken {
  id: BigNumber;
  uri: string;
}
