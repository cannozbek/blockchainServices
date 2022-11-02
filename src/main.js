const{Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ef004ec36ef41936ec8fcebef5e3f411967b6b992d1836d1f74565ab3b1f40ee');
const myWalletAddress = myKey.getPublic('hex');

let selcukCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
selcukCoin.addTransaction(tx1);

console.log('\n Starting the miner...');

selcukCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of remzican is', selcukCoin.getBalanceOfAddress(myWalletAddress));