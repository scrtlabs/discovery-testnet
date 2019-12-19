const Web3=require('web3');
const {Enigma, utils, eeConstants}=require('./enigma-js.node');
const HDWalletProvider = require("@truffle/hdwallet-provider");
var fs = require("fs");
require('dotenv').config();

var mnemonic = process.env["NEMONIC"];
var tokenKey = process.env["ENDPOINT_KEY"];

// ********** Change these values as needed ********************

const stakingAddress = 'SET_YOUR_STAKING_ADDRESS_HERE';
const operatingAddress = 'SET_YOUR_WORKER_OPERATING_ADDRESS_HERE';
const amount = 1 // in ENG

// ********** You should not need to changes these *************

const enigmaAddress = '0x758C82F0ecba028b9c7730F798F378EC121b5877';
const enigmaTokenAddress = '0xA5D12Ea873e33806B9f2A87b779facee297748cD';
const bootstrapNode = 'http://bootstrap-1.testnet.services.engima.co:3346';

// *************************************************************

const txDefaults = {
  gas: 4712388,
  gasPrice: 20000000000,
  from: stakingAddress
}

async function main () {
  const provider = new HDWalletProvider( mnemonic, "https://kovan.infura.io/v3/" + tokenKey);
  web3 = new Web3(provider);

  enigma = new Enigma(
    web3, 
    enigmaAddress, 
    enigmaTokenAddress, 
    bootstrapNode,
    txDefaults,
    { retry: {
        retries: 0
      }
    }
  );
  enigma.admin();

  await new Promise((resolve, reject) => {
  enigma.admin.setOperatingAddress(stakingAddress, operatingAddress)
    .on(eeConstants.SET_OPERATING_ADDRESS_RECEIPT, (result) => {
      console.log('Successfully "setOperatingAddress(' + stakingAddress + ', ' + operatingAddress + ')";');
      resolve(result)
    })
    .on(eeConstants.ERROR, (err) => {
      reject(err);
    });
  });

  await new Promise((resolve, reject) => {
    enigma.admin.deposit(stakingAddress, utils.toGrains(amount)).
    on(eeConstants.DEPOSIT_RECEIPT, (result) => {
      console.log('Successfully deposited ' + amount + 'ENG into Enigma contract for staking address: ' + stakingAddress);
      resolve(result)
    }).
    on(eeConstants.ERROR, (err) => {
      reject(err);
    });
  });

  provider.engine.stop();
}

main();


