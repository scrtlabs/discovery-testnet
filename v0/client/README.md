# Client Utility

This folder provides a very simple NodeJS script to run two external functions that are needed when setting up a Worker Node in the Enigma Network, namely:

- `setOperatingAdddress()`
- `deposit()`

## Installation and Setup

1. Clone this repo:

    ```
    git clone https://github.com/enigmampc/discovery-testnet.git
    ```

2. Change to this folder:

    ```
    cd discovery-testnet/v0/client
    ```

3. Install project dependencies:

	```
	yarn install
	```

4. Open an account with [infura.io](https://infura.io), create a project, and copy your `PROJECT_ID` into an `.env` file as follows, as well as the mnemonic of your `staking Address` (⚠️ DO NOT EVER COMMIT THIS FILE INTO ANY REPO OF YOURS ⚠️, there is a line in the `.gitignore` of this repo for this purpose, do not override it!):

	```
	NEMONIC="YOUR_STAKING_ADDRESS_MNEMONIC_HERE"
	ENDPOINT_KEY="PROJECT_ID"
	```

4. Edit the following fields in `stake.js` in Lines 12-14 (make sure to append `0x` for the two addresses):

	```
	const stakingAddress = 'SET_YOUR_STAKING_ADDRESS_HERE';
	const operatingAddress = 'SET_YOUR_WORKER_OPERATING_ADDRESS_HERE';
	const amount = 1 // in ENG
	```

5. Finally, run:

	```
	node stake.js
	```

	which should output two lines:

	```
	Successfully "setOperatingAddress(YOUR_STAKING_ADDRESS, YOUR_OPEARING_ADDRESS)";
	Successfully deposited {SOME} ENG into Enigma contract for staking address: YOUR_STAKING_ADDRESS
	```