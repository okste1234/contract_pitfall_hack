// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

interface IChallenge {
    function passKey(uint8 _key) external;

    function getENoughPoint(string memory _name) external;

    function addYourName() external;
}
