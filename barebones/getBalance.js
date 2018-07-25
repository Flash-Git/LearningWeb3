var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

/*
* Returns an account's balance from your local Geth Node
* Using an async function with await
*/

var address = '0X03364A97347C7A46D1D9384F6AB532554D0E64C6';

getBalance(address);

async function getBalance(address) {
    try {
         var result  = await web3.eth.getBalance(address);
    } catch (e) {
        console.log(e);
        return -1;
    }
    console.log("Balance of " + address + " is: " + result);
    return result;
}