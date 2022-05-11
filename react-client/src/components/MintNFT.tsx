import React, { FormEvent, FormEventHandler } from "react";
import { useConnect, useContract, useProvider, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import config from "../config";
import MintContract from "../contracts/MintNFT.json";

function MintNFT() {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const { isConnected } = useConnect({
    connector: new InjectedConnector(),
  });

  const contract = useContract({
    addressOrName: config.MINT_NFT_CONTRACT_ADDRESS,
    contractInterface: MintContract.abi,
    signerOrProvider: provider,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uri = (e.target as HTMLFormElement).uri.value;
    contract.connect(signer).mint(uri);
  };

  return (
    <div>
      <h2>Mint an NFT</h2>
      <form onSubmit={onSubmit}>
        <label>
          uri
          <input type="text" name="uri" style={{ margin: "0 1rem" }} />
        </label>
        <button disabled={!isConnected || !signer}>mint</button>
        {(!isConnected || !signer) && (
          <p style={{ color: "red" }}>no signer, connect your wallet first!</p>
        )}
      </form>
      <hr />
    </div>
  );
}

export default MintNFT;

export interface MintRequestParams {
  uri: string;
}
