pragma solidity ^0.4.19;

contract Counter {
    // https://programtheblockchain.com/posts/2018/01/02/making-smart-contracts-with-public-variables/
    uint256 public count;

    function Counter(uint256  _count) public {
        count = _count;
    }

    function increment() public {
        count += 1;
    }

    // equivalent to count()
    function getCount() public view returns (uint256) {
        return count;
    }
}
