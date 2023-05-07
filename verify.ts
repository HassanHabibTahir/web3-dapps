import console from "console";
import { BaseUri, WHITELIST_CONTRACT_ADDRESS } from "./constant";
const hre = require("hardhat");

// verify with script
async function main() {
  await hre.run("verify:verify", {
    address: "0xBe71C733f44f9ac3fEa9a0307186C4E1BCf5c4bb",
    constructorArguments: [BaseUri, WHITELIST_CONTRACT_ADDRESS],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
