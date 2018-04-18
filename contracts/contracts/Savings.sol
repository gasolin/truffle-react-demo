pragma solidity ^0.4.19;

contract Savings {
    address owner;
    uint256 deadline;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function Savings(uint256 numberOfDays) public payable {
        owner = msg.sender;
        deadline = now + (numberOfDays * 1 days);
    }

    function deposit(uint256 amount) public payable{
        require(msg.value == amount);
    }

    function withdraw() public onlyOwner {
        require(now >= deadline);

        msg.sender.transfer(address(this).balance);
    }
}
