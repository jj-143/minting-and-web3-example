import React from "react";
import { Provider, createClient } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { providers } from "ethers";
import Account from "./Account";
import MintNFT from "./MintNFT";
import NFTListing from "./NFTListing";

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector()],
  provider: (config) =>
    new providers.JsonRpcProvider("http://127.0.0.1:7545", {
      name: "Ganache Network",
      chainId: 1337,
    }),
});

function App() {
  return (
    <div>
      <h1>Minting and Web3 Example</h1>
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
