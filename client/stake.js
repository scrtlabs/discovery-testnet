const Web3=require('web3');
const {Enigma, utils, eeConstants}=require('./enigma-js.node');
const HDWalletProvider = require("@truffle/hdwallet-provider");
var fs = require("fs");
require('dotenv').config();

const mnemonic = process.env['NEMONIC'];
const tokenKey = process.env['ENDPOINT_KEY'];
const enigmaAddress = process.env['ENIGMA_ADDRESS'];
const enigmaTokenAddress = process.env['ENIGMA_TOKEN_ADDRESS'];
const bootstrapNode = process.env['BOOTSTRAP_NODE'];
const stakingAddress = process.env['STAKING_ADDRESS'];
const operatingAddress = process.env['OPERATING_ADDRESS'];

// ********** Change these values as needed ********************

const amount = 1 // in ENG

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


