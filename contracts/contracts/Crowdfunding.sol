pragma solidity ^0.4.19;

// TODO should able to stop/resume the compaign
contract Crowdfunding {
    address owner;
    uint256 public deadline;
    uint256 public goal;
    mapping(address => uint256) public pledgeOf;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function Crowdfunding(uint256 numberOfDays, uint256 _goal) public {
        owner = msg.sender;
        deadline = now + (numberOfDays * 1 days);
        goal = _goal;
    }

    // make sure the conditions are correct
    function pledge(uint256 amount) public payable {
        require(now < deadline);
        require(msg.value == amount);

        pledgeOf[msg.sender] += amount;
    }

    // for the owner
    function claimFunds() public onlyOwner {
        require(address(this).balance >= goal);
        require(now >= deadline);

        msg.sender.transfer(address(this).balance);
    }

    // for the funders
    function getRefund() public {
        require(address(this).balance < goal); // fund goal not met
        require(now >= deadline);

        // safety precaution process
        uint256 amount = pledgeOf[msg.sender];
        pledgeOf[msg.sender] = 0;
        msg.sender.transfer(amount);
    }
}
