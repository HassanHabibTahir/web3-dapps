import { ethers } from "hardhat";
import { WHITELIST_CONTRACT_ADDRESS, BaseUri } from "../constant";

async function main() {
  const Lock = await ethers.getContractFactory("CryptoDevs");
  const lock = await Lock.deploy(BaseUri, WHITELIST_CONTRACT_ADDRESS);

  await lock.deployed();

  console.log(`deployed to ${lock.address}`);

  // const Lock = await ethers.getContractFactory("Whitelist");
  // const lock = await Lock.deploy(30);

  // await lock.deployed();

  // console.log(`deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
