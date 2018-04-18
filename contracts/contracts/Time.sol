pragma solidity ^0.4.19;

contract Time {
    uint256 public createTime;

    function Time() public {
        createTime = now;
    }
}
