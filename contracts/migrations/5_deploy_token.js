// https://programtheblockchain.com/posts/2018/01/26/what-is-an-ethereum-token/
var MinimalToken = artifacts.require("MinimalToken");
// https://programtheblockchain.com/posts/2018/01/30/writing-an-erc20-token-contract/
var SimpleERC20Token = artifacts.require("SimpleERC20Token");
https://programtheblockchain.com/posts/2018/02/02/writing-a-token-sale-contract/
var TokenSale = artifacts.require("TokenSale");

module.exports = function(deployer) {
  deployer.deploy(MinimalToken, 8888);
  deployer.deploy(SimpleERC20Token).then(function() {
    return deployer.deploy(TokenSale, SimpleERC20Token.address, 100000);
  });
};
