var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

/*
Returns an account address from your local Geth Node at the specified index
*/

var accounts=[];//Array

var index = 0;//Index

web3.eth.getAccounts(function(error, data) {
  if(!error){
    for (x in data){
      accounts.push(data[x]);
    }
    console.log(accounts.length + " account(s) in array");
    getAccount(index);
  }else{
    console.error(error);
  }
});


function getAccount(_index) {
  console.log(accounts[_index] + " is account[" + _index + "]");
}