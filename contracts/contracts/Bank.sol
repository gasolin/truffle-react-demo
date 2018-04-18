pragma solidity ^0.4.21;

contract Bank {
    // The value of a missing mapping value is 0
    mapping(address => uint256) public balanceOf;

    function deposite(uint256 amount) public payable {
        require(msg.value == amount);
        require(amount > 0);
        balanceOf[msg.sender] += amount;
    }

    function withdrawal(uint256 amount) public {
        require(amount <= balanceOf[msg.sender]);
        // must call before transferring ether to avoid Reentrancy Vulnerability
        balanceOf[msg.sender] -= amount;
        msg.sender.transfer(amount);
    }
}
