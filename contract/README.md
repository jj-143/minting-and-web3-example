# Contract
## Description
* tokenURI<string> (json형식의 metadata를 가리키는 주소, 참조: https://eips.ethereum.org/EIPS/eip-721) 을 넣어 민팅할 수 있는 간단한 Contract `MintNFT` 입니다.

### setup
* `npx hardhat` - "Basic Sample Hardhat Project" 로 프로젝트 생성 & TypeScript 추가.
* localhost가 Ganache (:7545) 로 세팅되어있습니다 - hardhat.config.ts

### Scripts
* install: `yarn install`
* test: `npx hardhat test`
* compile artifacts: `npx hardhat compile`
* deploy "MintNFT" contract (to Ganache local network): `npx hardhat run ./scripts/deploy-mint-nft.ts --network localhost`