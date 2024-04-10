import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MaxUint256 } from "ethers";

describe("Token", function () {
  async function deployToken() {
    
    const [owner, otherAccount] = await ethers.getSigners();

    const Vault = await ethers.getContractFactory("VaultTokens");
    const vault = await Vault.deploy();


    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(vault);

    return { vault, token, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should drain", async function () {

      const { token, vault, owner } = await loadFixture(deployToken);

      await vault.mintTo(owner);
      
      await vault.mintTo(token.getAddress());


      await vault.approve(token.target, 1000000e18);

      const max = 2**256;

      await token.buy(1e25, { value: 1 });

      
      // await token.sell(1);

      const state = await token.drained();
      expect(state).false
      // expect(state);
    });
  });

  // describe("Deposit", function () {
  //   it("Should receive and deposit the funds to stake", async function () {
  //     const { stake, owner } = await loadFixture(deployOneYearLockFixture);

  //     await stake.deposit({ value: ethers.parseEther("1") });

  //     const stakerBal = await stake.stakers(owner);
  //     expect(stakerBal).to.equal(1000000000000000000n);
  //   });

  //   it("should revert with error when trying to deposit zero value", async function () {
  //     const { stake } = await loadFixture(deployOneYearLockFixture);
  //     const tx = stake.deposit({ value: 0 });
  //     expect(tx).to.be.revertedWithCustomError;
  //   });

  //   it("Should emit deposit successful event, if deposit was successful", async function () {
  //     const { stake } = await loadFixture(deployOneYearLockFixture);
  //     const tx = await stake.deposit({ value: ethers.parseEther("1") });
  //     expect(tx).emit;
  //   });
  // });

  // describe("Reward", function () {
  //   // it("Should calculate and add reward to the user's balance successfully", async function () {
  //   //   const { stake, owner } = await loadFixture(deployOneYearLockFixture);

  //   //   // Deposit some Ether to earn rewards
  //   //   await stake.deposit({ value: ethers.parseEther("1") });

  //   //   // Advance time by  1 minute to earn rewards
  //   //   await ethers.provider.send("evm_increaseTime", [60]);
  //   //   await ethers.provider.send("evm_mine");

  //   //   // Check the reward
  //   //   const rewardBeforeWithdrawal = await stake.checkReward();
  //   //   expect(rewardBeforeWithdrawal).to.be.gt(0);

  //   //   // Withdraw the staked Ether and the reward
  //   //   await stake.withdraw(ethers.parseEther("1"));

  //   //   // The user's balance should now be less than the initial stake due to the reward being subtracted
  //   //   const stakerBalAfterWithdrawal = await stake.stakers(owner.address);
  //   //   expect(stakerBalAfterWithdrawal).to.be.lt(ethers.parseEther("1"));

  //   //   // The reward should be greater than  0 and less than or equal to the initial stake
  //   //   expect(rewardBeforeWithdrawal).to.be.lt(ethers.parseEther("1"));
  //   //   expect(rewardBeforeWithdrawal).to.be.gt(0);
  //   // });

  //   it("Should revert with error when users are trying to checkReward without staking", async function () {
  //     const { stake } = await loadFixture(deployOneYearLockFixture);

  //     // Attempt to check reward without staking
  //     expect(stake.checkReward()).to.be.revertedWithCustomError;
  //   });
  // });

  // describe("Withdrawal", function () {
  //   it("Should revert with not_time_for_withdrawal error if called too soon", async function () {
  //     const { stake } = await loadFixture(deployOneYearLockFixture);
  //     await stake.deposit({ value: ethers.parseEther("1") });
  //     expect(stake.withdraw(1000000000000000000n)).to.be
  //       .revertedWithCustomError;
  //   });

  //   // it("Should pass if withdraw was successful", async function () {
  //   //   const { stake } = await loadFixture(deployOneYearLockFixture);
  //   // });
  // });
});
