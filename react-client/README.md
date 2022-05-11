# react-client
web3 library (wagmi)를 사용한 React web clien 샘플 프로젝트입니다.

## 구현된 기능
* Wallet 연결 (MetaMask)
* account address/balance 확인
* Contract 연결
  * 현재 로컬 Ganache Network (127.0.0.1:7545, chainId: 1337)에 배포되었다고 가정한 contract 주소를 사용합니다.
  `react-client/src/config.ts` 에 컨트랙트 주소, abi는 `react-client/src/contracts/MintNFT.json` 에 있습니다.
  Ganache Network에 contract 배포는 `contract/README.md` 의 Scripts에서 deploy 항목을 참조해주세요.
* Contract 사용
  * view functions: getAlltoken(), ownerOf()
  * transactions: mint()