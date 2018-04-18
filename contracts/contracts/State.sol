pragma solidity ^0.4.19;

contract State {
    uint256 state;

    function State(uint256 _state) public {
        state = _state;
    }

    function getValue() public view returns (uint256) {
        return state;
    }
}
