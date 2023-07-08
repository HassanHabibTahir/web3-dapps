// import { ethers } from "hardhat";
// import { WHITELIST_CONTRACT_ADDRESS, BaseUri } from "../constant";

// async function main() {
//   const Lock = await ethers.getContractFactory("CryptoDevs");
//   const lock = await Lock.deploy(BaseUri, WHITELIST_CONTRACT_ADDRESS);

//   await lock.deployed();

//   console.log(`deployed to ${lock.address}`);

//   // const Lock = await ethers.getContractFactory("Whitelist");
//   // const lock = await Lock.deploy(30);

//   // await lock.deployed();

//   // console.log(`deployed to ${lock.address}`);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// const hre = require("hardhat");
// import hre from "hardhat";
import { run, ethers } from "hardhat";
async function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the NFT Contract
  const nftContract = await ethers.deployContract("CryptoDevsNFT");
  console.log("CryptoDevsNFT deployed to:", nftContract.address);
  // let tx = await nftContract.deployed();
  // console.log(tx, "tx");
  // // Deploy the Fake Marketplace Contract
  const fakeNftMarketplaceContract = await ethers.deployContract(
    "FakeNFTMarketplace"
  );
  // await fakeNftMarketplaceContract.deployed();
  console.log(
    "FakeNFTMarketplace deployed to:",
    fakeNftMarketplaceContract.address
  );
  // Deploy the DAO Contract
  const daoContract = await ethers.deployContract("CryptoDevsDAO", [
    fakeNftMarketplaceContract.address,
    nftContract.address,
  ]);
  // await daoContract.deployed();
  console.log("CryptoDevsDAO deployed to:", daoContract.address);

  // Sleep for 30 seconds to let Etherscan catch up with the deployments
  await sleep(30 * 1000);

  // Verify the NFT Contract
  await run("verify:verify", {
    address: nftContract.address,
    constructorArguments: [],
  });

  // Verify the Fake Marketplace Contract
  await run("verify:verify", {
    address: fakeNftMarketplaceContract.address,
    constructorArguments: [],
  });

  // Verify the DAO Contract
  await run("verify:verify", {
    address: daoContract.address,
    constructorArguments: [
      fakeNftMarketplaceContract.address,
      nftContract.address,
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
