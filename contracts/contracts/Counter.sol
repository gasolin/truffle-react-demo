pragma solidity ^0.4.21;

contract Counter {
    // https://programtheblockchain.com/posts/2018/01/02/making-smart-contracts-with-public-variables/
    uint256 public count;

    // https://programtheblockchain.com/posts/2018/01/24/logging-and-watching-solidity-events/
    // Event name with uppercase letters as convension
    event EvtIncrement(address who);   // declaring event

    function Counter(uint256  _count) public {
        count = _count;
    }

    function increment() public {
        emit EvtIncrement(msg.sender); // logging event
        count += 1;
    }

    // equivalent to count()
    function getCount() public view returns (uint256) {
        return count;
    }
}
