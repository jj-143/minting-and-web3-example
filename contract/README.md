# Contract
## Description
* A simple contract `MintNFT` featuring minting an NFT. Store a single string data `tokenURI` pointing to an address for json metadata (see: https://eips.ethereum.org/EIPS/eip-721)

### setup
* `npx hardhat` - Created with "Basic Sample Hardhat Project" & Add TypeScript
* localhost is set to use Ganache (:7545) - hardhat.config.ts

### Scripts
* install: `yarn install`
* test: `npx hardhat test`
* compile artifacts: `npx hardhat compile`
* deploy "MintNFT" contract (to Ganache local network): `npx hardhat run ./scripts/deploy-mint-nft.ts --network localhost`
* deploy "MintNFT" contract (to Goerli Testnet using Alchemy): `GOERLI_API_KEY=[key] ACCOUNT_KEY=[account_key] npx hardhat run ./scripts/deploy-mint-nft.ts --network goerli`