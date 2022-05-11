# react-client
A sample React web3 client using wagmi.

## Features
* connect a wallet with MetaMask
* check account address/balance
* use contract
  * assuming there's a contract deployed on local Ganache Network (127.0.0.1:7545, chainId: 1337)
    * contract address is defined at `react-client/src/config.ts`
    * abi는 `react-client/src/contracts/MintNFT.json`
    * checkout Scripts > deploy section on `contract/README.md` for deploying a contract on Ganache
  * features
    * view functions: getAlltoken(), ownerOf()
    * transactions: mint()