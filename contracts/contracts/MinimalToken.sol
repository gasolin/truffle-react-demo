pragma solidity ^0.4.21;

contract MinimalToken {
    mapping(address => uint256) public balanceOf;

    function MinimalToken(uint256 totalSupply) public {
        // assign all tokens to the contract's creator
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount);

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
}
