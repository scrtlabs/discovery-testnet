# discovery-testnet

👋 Welcome to the Enigma Discovery Testnet. We are glad that you are interested in Data Privacy, and you are considering joining the Enigma network, a protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains.

This repository provides the reference data for the Discovery Tesnet releases.

Refer to the [SETUP.md](https://github.com/enigmampc/discovery-testnet/blob/master/SETUP.md) for the instructions on how to run a worker node in `testnet` 🚀

## v2 - 2020-01-15

### Ethereum Addresses

| Parameter                       | Value                                        |
| --------------------------------|:--------------------------------------------:| 
| Enigma Contract Address         | TBD                                          |
| Enigma Token Contract Address   | `0xA5D12Ea873e33806B9f2A87b779facee297748cD` |
| Key Management Ethereum Address | `0x08f1A8d4c3085839315Ff3dA1acf194697864855` |
| Bootstrap 1 Ethereum Address    | `0x4020c019f4ed873241b7d4eb0c9f755ed6ae55c2` |
| Bootstrap 2 Ethereum Address    | `0x0c836793653c8872277f8b538af11c96052f4700` |
| Bootstrap 3 Ethereum Address    | `0x2014bb777c95414aa3ff7dc63defd405dcc26cd4` |
| Owner of Enigma Contract        | `0xDa6A5528FabD9a88b5a17B27Afaa3e95956Ab08d` |

For the rest of addresses of the library contracts that the Enigma contract depends on and uses, see the `v2/contracts/` folder, where each address is written in a text file with the name of the corresponding library.

### DNS Addresses

| Parameter                       | Value                                        |
| --------------------------------|----------------------------------------------| 
| Key Management Address          | km-testnet.enigma.co                         |
| Bootstrap Node 1                | bootstrap-1.testnet.services.enigma.co       |
| Bootstrap Node 2                | bootstrap-2.testnet.services.enigma.co       |
| Bootstrap Node 3                | bootstrap-3.testnet.services.enigma.co       |

### Enigma Contract Constructor Parameters

| Parameter                       | Value                                                                |
| --------------------------------|----------------------------------------------------------------------|
| SGX Debug Mode                  | `true` (will eventually set to `false`)                              |
| SGX ISVSVN                      | `0x0000`                                                             |
| SGX MRSIGNER                    | `0x83d719e77deaca1470f6baf62a4d774303c899db69020f9c70ee1dfc08c7ce9e` |
| Epoch Size                      | `450 blocks` (~ 15 minutes)                                          |
| Timeout Threshold               | `2 epochs`                                                           |
| Key Management Signing Address  | `0xbc0eefdfcbda35f4a9a5608bbc64dbcd7b73fe7e`                         |


## v1 - 2019-12-22

### Ethereum Addresses

| Parameter                       | Value                                        |
| --------------------------------|:--------------------------------------------:| 
| Enigma Contract Address         | `0x8FDbB8BA27d122BE10bfA63B8F0FD2676d083e50` |
| Enigma Token Contract Address   | `0xA5D12Ea873e33806B9f2A87b779facee297748cD` |
| Key Management Ethereum Address | `0x08f1A8d4c3085839315Ff3dA1acf194697864855` |
| Bootstrap 1 Ethereum Address    | `0x4020c019f4ed873241b7d4eb0c9f755ed6ae55c2` |
| Bootstrap 2 Ethereum Address    | `0x0c836793653c8872277f8b538af11c96052f4700` |
| Bootstrap 3 Ethereum Address    | `0x2014bb777c95414aa3ff7dc63defd405dcc26cd4` |
| Owner of Enigma Contract        | `0xDa6A5528FabD9a88b5a17B27Afaa3e95956Ab08d` |

For the rest of addresses of the library contracts that the Enigma contract depends on and uses, see the `v1/contracts/` folder, where each address is written in a text file with the name of the corresponding library.

### DNS Addresses

| Parameter                       | Value                                        |
| --------------------------------|----------------------------------------------| 
| Key Management Address          | <REALLOCATED TO v2>                          |
| Bootstrap Node 1                | <REALLOCATED TO v2>                          |
| Bootstrap Node 2                | <REALLOCATED TO v2>                          |
| Bootstrap Node 3                | <REALLOCATED TO v2>                          |


### Enigma Contract Constructor Parameters

| Parameter                       | Value                                                                |
| --------------------------------|----------------------------------------------------------------------|
| SGX Debug Mode                  | `true` (will eventually set to `false`)                              |
| SGX ISVSVN                      | `0x0000`                                                             |
| SGX MRSIGNER                    | `0x83d719e77deaca1470f6baf62a4d774303c899db69020f9c70ee1dfc08c7ce9e` |
| Epoch Size                      | `450 blocks` (~ 15 minutes)                                          |
| Timeout Threshold               | `2 epochs`                                                           |
| Key Management Signing Address  | `0xbc0eefdfcbda35f4a9a5608bbc64dbcd7b73fe7e`                         |


## v0 - 2019-12-19

### Ethereum Addresses

| Parameter                       | Value                                        |
| --------------------------------|:--------------------------------------------:| 
| Enigma Contract Address         | `0x758C82F0ecba028b9c7730F798F378EC121b5877` |
| Enigma Token Contract Address   | `0xA5D12Ea873e33806B9f2A87b779facee297748cD` |
| Key Management Ethereum Address | `0x08f1A8d4c3085839315Ff3dA1acf194697864855` |
| Bootstrap 1 Ethereum Address    | `0x7F79E8fcF310413be02003d24966B1Fa4AaE71a0` |
| Bootstrap 2 Ethereum Address    | `0x7B766D180f07a4D9116A6226B36a6C275B61AFD1` |
| Bootstrap 3 Ethereum Address    | `0xbA30A4A586Fcc5c6deF749b173b744dA5A14e25c` |
| Owner of Enigma Contract        | `0xDa6A5528FabD9a88b5a17B27Afaa3e95956Ab08d` |

For the rest of addresses of the library contracts that the Enigma contract depends on and uses, see the `v0/contracts/` folder, where each address is written in a text file with the name of the corresponding library.

### DNS Addresses

| Parameter                       | Value                                        |
| --------------------------------|----------------------------------------------| 
| Key Management Address          | <REALLOCATED TO v1>                          |
| Bootstrap Node 1                | <REALLOCATED TO v1>                          |
| Bootstrap Node 2                | <REALLOCATED TO v1>                          |
| Bootstrap Node 3                | <REALLOCATED TO v1>                          |


### Enigma Contract Constructor Parameters

| Parameter                       | Value                                                                |
| --------------------------------|----------------------------------------------------------------------|
| SGX Debug Mode                  | `true` (will eventually set to `false`)                              |
| SGX ISVSVN                      | `0x0000`                                                             |
| SGX MRSIGNER                    | `0x83d719e77deaca1470f6baf62a4d774303c899db69020f9c70ee1dfc08c7ce9e` |
| Epoch Size                      | `60 blocks` (~ 4 minutes)                                            |
| Timeout Threshold               | `2 epochs`                                                           |
| Key Management Signing Address  | `0xbc0eefdfcbda35f4a9a5608bbc64dbcd7b73fe7e`                         |
