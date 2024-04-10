import { ethers } from "hardhat";

async function main() {
  
  const challenge = "0xeDBc81a4d20B616AFc6Acf43D2197f192049ca04"

  const stakeEther = await ethers.deployContract("Att", [challenge]);

  await stakeEther.waitForDeployment();

  console.log(
    `StakeEther deployed to ${stakeEther.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
