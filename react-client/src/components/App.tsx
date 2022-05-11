import React from "react";
import { Provider, createClient } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { providers } from "ethers";
import Account from "./Account";
import MintNFT from "./MintNFT";
import NFTListing from "./NFTListing";
import config from "../config";

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector()],
  // uncomment below for Ganache Local Net
  // provider: (config) =>
  //   new providers.JsonRpcProvider("http://127.0.0.1:7545", {
  //     name: "Ganache Network",
  //     chainId: 1337,
  //   }),
  provider: (_config) =>
    new providers.AlchemyProvider("goerli", config.ALCHEMY_API_KEY),
});

function App() {
  return (
    <div>
      <h1>Minting and Web3 Example</h1>
      <h2>
        <p>Contract address (Goerli): {config.MINT_NFT_CONTRACT_ADDRESS}</p>
        <p>
          etherscan:{" "}
          <a
            href={`https://goerli.etherscan.io/address/${config.MINT_NFT_CONTRACT_ADDRESS}`}
          >{`https://goerli.etherscan.io/address/${config.MINT_NFT_CONTRACT_ADDRESS}`}</a>
        </p>
      </h2>

      <Account />
      <MintNFT />
      <NFTListing />
    </div>
  );
}

export default () => (
  <Provider client={client}>
    <App />
  </Provider>
);
