import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function getContract() {
  const factory = await ethers.getContractFactory("MintNFT");
  const contract = await factory.deploy();
  await contract.deployed();
  return contract;
}

getContract().then((contract) =>
  console.log("[*] MintNFT deployed @", contract.address)
);
