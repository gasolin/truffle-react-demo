pragma solidity ^0.4.19;

contract TipJar {
    address owner;

    modifier ownerOnly {
        require(owner == msg.sender);
        _;
    }

    function TipJar() public {
        owner = msg.sender;
    }

    function changeOwner(address newOwner) public ownerOnly {
        owner = newOwner;
    }

    function withdraw() public ownerOnly {
        msg.sender.transfer(address(this).balance);
    }

    // If contract did not have a payable fallback function,
    // this transaction would have simply failed
    // function() payable public {}

    function deposit(uint256 amount) payable public {
        require(msg.value == amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
