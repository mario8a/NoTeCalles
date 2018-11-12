var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/3e4bc123307246acb33f04f8d09c2184"));
var abi = [{ "constant": false, "inputs": [{ "name": "_title", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_name", "type": "string" }, { "name": "_address", "type": "address" }], "name": "addRelate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "journalists", "outputs": [{ "name": "title", "type": "string" }, { "name": "description", "type": "string" }, { "name": "journalistName", "type": "string" }, { "name": "journalistAdd", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "numRelates", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];
var VotingContract = web3.eth.contract(abi);

var contractInstance = VotingContract.at('0xdA9419B1422051E5cC8217906aC50A958a7639f1');


function getRelates() {
    let json = { "journalists": [] }
    let journalistNode = {}
    let journalist = contractInstance.journalists
    let relates = contractInstance.numRelates.call().toString();
    console.log(relates)
    for (var i = 0; i < relates; i++) {
        journalist = contractInstance.journalists.call(i);

        journalistNode = {
            "title": journalist[0],
            "description": journalist[1],
            "name": journalist[2],
            "address": journalist[3]
        }
        json.journalists.push(journalistNode);
    }
    console.log(json);
    return json;

};

getRelates()



//getRelates();