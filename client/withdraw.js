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

  const workerStruct = await enigma.enigmaContract.methods.getWorker(operatingAddress).call();
  const withdrawAmount = workerStruct['balance'];

  if(withdrawAmount) {
    await new Promise((resolve, reject) => {
      enigma.admin.withdraw(stakingAddress, withdrawAmount).on(eeConstants.WITHDRAW_RECEIPT, (result) => {
        resolve(result);
      }).on(eeConstants.ERROR, (err) => {
        reject(err);
      });
    });

    console.log('Withdrawn '+(balance/10^8)+' ENG for stakingAddress: '+stakingAddress);
  } else {
    console.log('No balance to withdraw.')
  }

  provider.engine.stop();
}

main();


