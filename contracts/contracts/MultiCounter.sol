pragma solidity ^0.4.21;

contract MultiCounter {
    mapping(uint256 => uint256) public counts;

    // indexed parameter can be used to efficiently filter events
    event EvtIncrement(uint256 indexed which, address who);

    function increment(uint256 which) public {
        emit EvtIncrement(which, msg.sender);
        counts[which] += 1;
    }
}
