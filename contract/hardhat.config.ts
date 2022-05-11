import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

import { task } from "hardhat/config";

const GOERLI_API_KEY = process.env.GOERLI_API_KEY;
const ACCOUNT_KEY = process.env.ACCOUNT_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      // local Ganache network
      url: "http://127.0.0.1:7545",
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${GOERLI_API_KEY}`,
      accounts: [`${ACCOUNT_KEY}`],
    },
  },
};
