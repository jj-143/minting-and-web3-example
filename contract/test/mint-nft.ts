import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("MintNFT", function () {
  let contract: Contract;
  let signers: SignerWithAddress[];

  before(async () => {
    contract = await getContract();
    signers = await ethers.getSigners();
  });

  it("should mint", async () => {
    const tx = await contract.connect(signers[3]).mint("test-uri");
    await tx.wait();
  });

  it("should have correct tokens count (1)", async () => {
    const tokens = await contract.getAlltoken();
    expect(tokens.length).equals(1);
  });

  it("should have correct tokens count (2)", async () => {
    const tx = await contract.mint("test-uri2");
    await tx.wait();

    const tokens = await contract.getAlltoken();
    expect(tokens.length).equals(2);
  });

  it("Owner should match the signer", async () => {
    const tokens = await contract.getAlltoken();
    expect(await contract.ownerOf(tokens[0].id)).equal(signers[3].address);
    expect(await contract.ownerOf(tokens[1].id)).equal(signers[0].address);
  });

  it("should have the uri to have minted with", async () => {
    const tokens = await contract.getAlltoken();
    expect(tokens[0].uri).equals("test-uri");
    expect(tokens[1].uri).equals("test-uri2");
  });
});

async function getContract() {
  const factory = await ethers.getContractFactory("MintNFT");
  const contract = await factory.deploy();
  await contract.deployed();
  return contract;
}
