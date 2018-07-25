var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

/*
* Returns an account's token balance from your local Geth Node
* Using callback
*/

var tknAddrWeth = '0xc778417e063141139fce010982780140aa0cd5ab';
var weth = 'weth';

var address = '0X03364A97347C7A46D1D9384F6AB532554D0E64C6';

var tokenName = weth;
var contractAddr = tknAddrWeth;

console.log("Getting token count of " + tokenName + "(" + contractAddr + ") of address(" + address + ")");

var addressSub = (address).substring(2);

//function of the token contract + 0 buffer + token address
//balanceOf() = 0x70a08231 in hex
var contractData = ('0x70a08231000000000000000000000000' + addressSub);

web3.eth.call({
      to: contractAddr, 
      data: contractData  
    }, function(err, result){
  if (result){ 
    var tokens = web3.utils.toBN(result).toString(); 
    //Displays as ether instead of wei
    console.log(tokenName + " owned: " + web3.utils.fromWei(tokens, 'ether'));
  }else{
    console.log(err);
  }
});