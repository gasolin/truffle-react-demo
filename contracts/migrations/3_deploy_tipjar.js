// https://programtheblockchain.com/posts/2017/12/15/writing-a-contract-that-handles-ether/
var CommunityChest = artifacts.require("CommunityChest");
// https://programtheblockchain.com/posts/2017/12/26/checking-the-sender-in-a-smart-contract/
var TipJar = artifacts.require("TipJar");
// https://programtheblockchain.com/posts/2018/01/05/writing-a-banking-contract/
var Bank = artifacts.require("Bank");

module.exports = function(deployer) {
  deployer.deploy(CommunityChest);
  deployer.deploy(TipJar);
  deployer.deploy(Bank);
};
