pragma solidity ^0.4.21;

contract CommunityChest {
    function withdraw() public {
        // .transfer is prefered than .send
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
