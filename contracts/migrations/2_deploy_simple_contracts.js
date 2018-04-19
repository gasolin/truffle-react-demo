var Trivial = artifacts.require("Trivial");
var State = artifacts.require("State");
var Counter = artifacts.require("Counter");
// https://programtheblockchain.com/posts/2018/01/24/logging-and-watching-solidity-events/
var MultiCounter = artifacts.require("MultiCounter");

// https://programtheblockchain.com/posts/2017/12/08/writing-a-very-simple-smart-contract/
module.exports = function(deployer) {
  deployer.deploy(Trivial);
  deployer.deploy(State, 666);
  deployer.deploy(Counter, 666);
  deployer.deploy(MultiCounter);
};
