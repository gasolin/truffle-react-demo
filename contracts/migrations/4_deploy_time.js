// https://programtheblockchain.com/posts/2018/01/12/writing-a-contract-that-handles-time/
var Time = artifacts.require("Time");
var Savings = artifacts.require("Savings");
// https://programtheblockchain.com/posts/2018/01/19/writing-a-crowdfunding-contract-a-la-kickstarter/
var Crowdfunding = artifacts.require("Crowdfunding");

module.exports = function(deployer) {
  deployer.deploy(Time);
  deployer.deploy(Savings, 7);
  deployer.deploy(Crowdfunding, 7, 100);
};
