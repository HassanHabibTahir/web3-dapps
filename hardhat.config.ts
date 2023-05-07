import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;
const BSC_TEST_NET = process.env.BSC_TEST_NET;
const BSC_PRIVATE_KEY = process.env.BSC_PRIVATE_KEY;
const SapoliaUrl = process.env.SapoliaUrl;
const SAP_PRIVATE_KEY = process.env.SapoliaPrivateKey;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      chainId: 5,
      url: QUICKNODE_HTTP_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bsctest: {
      chainId: 97,
      url: BSC_TEST_NET,
      accounts: [`0x${BSC_PRIVATE_KEY}`],
    },
    sapolia: {
      chainId: 11155111,
      url: SapoliaUrl,
      accounts: [`0x${SAP_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
