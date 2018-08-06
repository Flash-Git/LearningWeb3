/*
* Author: Flash
* Date: 06/07/2018
*/

/*
* Printing out an account address from your local Geth Node at a specified index
* Using both a simple callback and a Promise
*/

/*
* VARIABLES
*/

//Using web3
const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//Index of account 
const INDEX = 0;

/*
* CODE EXECUTION
*/

execute(INDEX);

/*
* FUNCTIONS
*/

//async is required to use await (for Promise)
async function execute(_index) {
    console.log("1. printAccountWithCallback(" + _index + "):");
    console.log("2. getAccountWithCallbackPromise(" + _index + "):");

    //Variables must be set inside of callback
    //Code depending on these variables must be called from inside of callback
    //No easy way to know when this will happen outside of the callback
    let account1 = "";
    printAccountWithCallback(_index, account1);//Get account at _index and print it to console
    
    //Variables is assigned by pausing code until Promise is returned
    const account2 = await printAccountWithCallbackPromise(_index);
    console.log(account2 + " is account[" + _index + "]");
}

//Without Promise
function printAccountWithCallback(_index, _account1) {
    web3.eth.getAccounts(
        function(error, data) {
            if(!error){
                const accounts = [];
                for(x in data){
                    accounts.push(data[x]);
                }
                _account1 = accounts[_index];
                console.log("\n1. " + accounts.length + " account(s) in array");
                console.log(_account1 + " is account[" + _index + "]");
            }else{
                console.error("Error getting accounts\n" + error);
            }
        }
    );
}

//With Promise
function getAccountWithCallbackPromise(_index) {
    return new Promise(
        function(resolve, reject){
            web3.eth.getAccounts(
                function(error, data) {
                    if(!error){
                        const accounts = [];
                        for(x in data){
                            accounts.push(data[x]);
                        }
                        console.log("\n2. " + accounts.length + " account(s) in array");
                        resolve(accounts[_index]);
                    }else{
                        console.error("Error getting accounts\n" + error);
                        resolve(false);
                    }
                }
            );
        }
    );
    console.error("Escaped promise");
    return(false);
}