// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    receive() external payable{}

    string[] companies;
    constructor()  {}
    mapping(string => uint) public balance;
    uint256 counter = 0;
    //integers for now, update to UUID keccarck256
    function createCompany(string memory name) public {
        balance[name] = 0;
        companies.push(name);
    }

    function deposit(string memory name) public payable {
        balance[name] += msg.value;
    }

    function distribute(uint256 price, string memory name) public {
        balance[name] -= price;
        payable(msg.sender).transfer(price);
    }
}