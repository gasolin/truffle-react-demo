pragma solidity ^0.4.21;

contract Time {
    uint256 public createTime;

    function Time() public {
        createTime = now;
    }
}
