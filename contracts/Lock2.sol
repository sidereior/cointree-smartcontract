// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Vault {
    receive() external payable {}

    constructor() {}

    address[] companies;

    mapping(address => uint256) public balances;

    function createCompany() public {
        companies.push(msg.sender);
        balances[msg.sender] = 0;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        //what if the person who is supposed to withdrawl ends up depositing?
        //need catach all for any API call, how does API endpoint encription even work??
        // think or swim api (they probably use stripe)
        //bmv dmv api
        //solar permits api and 
    }

    function distribute(uint256 amount, string memory name) public {
        balances[name] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function getBalance(string memory name) public view returns (uint) {
        return balances[name];
    }

    function getCompanies() public view returns (string[] memory) {
        return companies;
    }
}