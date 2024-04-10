import { ethers } from "hardhat";

async function main() {

  // const attackAddress = "0xbb479A00Cf632979DF2D1614b688a0fB8B35Ea67";
  const attackAddress = "0xfE9df38bda2AdDA5206ABad704a8008d88c9fcF2";
  const attac = await ethers.getContractAt("Att", attackAddress);


  const tx1 = await attac.bruteForce();
  await tx1.wait();

  // const tx = await attac.acc();
  // await tx.wait();

  const tx2 = await attac.abc();
  await tx2.wait();

  // const reward = await StakeEther.checkReward();

  // const withdraw = await StakeEther.withdraw(1000000000000000012n)
  // await withdraw.wait();

  
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
