# Testnet v0

**Release Date**: 2019-12-19

## How to run a node

### Requirements

- Host computer with Intel Software Guard Extensions (SGX)
- `Ubuntu 16.04` or `Ubuntu 18.04` (though other Linux distros are probably supported, more info coming soon).
- Docker
- Docker-Compose

### Setup

1. Install [linux-sgx-driver](https://github.com/intel/linux-sgx-driver). After a successful installation you should see `/dev/isgx` in your system.

2. Download the `docker-compose.yml` from this folder, and make sure a `config/.enigma` folder exists.

3. `docker-compose up`, which should display something like the following logs:

```
Status: Downloaded newer image for enigmampc/external_worker_hw:testnet
Recreating external-worker_worker_1 ... done
Attaching to external-worker_worker_1
worker_1  | 2019-12-19 13:18:44,072 CRIT Set uid to user 0
worker_1  | 2019-12-19 13:18:44,076 INFO RPC interface 'supervisor' initialized
worker_1  | 2019-12-19 13:18:44,077 CRIT Server 'unix_http_server' running without any HTTP authentication checking
worker_1  | 2019-12-19 13:18:44,077 INFO supervisord started with pid 1
worker_1  | 2019-12-19 13:18:45,079 INFO spawned: 'core' with pid 8
worker_1  | 2019-12-19 13:18:45,080 INFO spawned: 'aesm_service' with pid 9
worker_1  | 2019-12-19 13:18:45,081 INFO spawned: 'p2p' with pid 10
worker_1  | The path of system bundle: System Bundle
worker_1  | ecdsa_quote_service_bundle_name:2.0.0
worker_1  | epid_quote_service_bundle_name:2.0.0
worker_1  | le_launch_service_bundle_name:2.0.0
worker_1  | linux_network_service_bundle_name:2.0.0
worker_1  | local_pseop_service_bundle_name:2.0.0
worker_1  | pce_service_bundle_name:2.0.0
worker_1  | psepr_service_bundle_name:2.0.0
worker_1  | quote_ex_service_bundle_name:2.0.0
worker_1  | system_bundle:4.0.0
worker_1  | [  2019-12-19 13:18:45,123] [INFO] pycommon.config                __init__:34 -- Loading custom configuration: ./core/config/testnet_config.json
worker_1  | [load_qe /sgx/external/dcap_source/QuoteGeneration/quote_wrapper/quote/qe_logic.cpp:559] Error, call sgx_create_enclave QE fail [load_qe], SGXError:4004.
worker_1  | [load_qe /sgx/external/dcap_source/QuoteGeneration/quote_wrapper/quote/qe_logic.cpp:560] Failed to load enclave.
worker_1  | [  2019-12-19 13:18:45,507] [INFO] pycommon.config                __init__:34 -- Loading custom configuration: /root/p2p/config/testnet_config.json
worker_1  | [  2019-12-19 13:18:45,507] [INFO] worker.p2p-startup             main:103 -- Setting up worker...
worker_1  | [  2019-12-19 13:18:45,507] [INFO] worker.p2p-startup             main:104 -- Running for environment: TESTNET
worker_1  | [  2019-12-19 13:18:45,508] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
worker_1  | 2019-12-19 13:18:46,510 INFO success: core entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
worker_1  | 2019-12-19 13:18:46,510 INFO success: aesm_service entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
worker_1  | 2019-12-19 13:18:46,510 INFO success: p2p entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
worker_1  | [2019-12-19 13:18:47] [worker] INFO  enigma_core_app::esgx::general -- Home dir is /root
worker_1  | [2019-12-19 13:18:47] [worker] ERROR enigma_core_app::esgx::general -- Create .enigma folder => AlreadyExists
worker_1  | [2019-12-19 13:18:47] [worker] ERROR enigma_tools_u::esgx::general -- Open token file /root/.enigma/enclave.token error! Will create one.
worker_1  | [  2019-12-19 13:18:47,511] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
worker_1  | [2019-12-19 13:18:47] [worker] INFO  enigma_core_app::esgx::general -- init_enclave_wrapper() => Ok(SgxEnclave { id: 2, debug: 1, path: "../bin/enclave.signed.so" })
worker_1  | [2019-12-19 13:18:47] [worker] INFO  enigma_core_app -- [+] Init Enclave Successful 2!
worker_1  | [  2019-12-19 13:18:49,512] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
worker_1  | [  2019-12-19 13:18:51,514] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
worker_1  | [  2019-12-19 13:18:53,516] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
worker_1  | [  2019-12-19 13:18:55,519] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
worker_1  | [  2019-12-19 13:18:57,521] [INFO] worker.p2p-startup             main:122 -- Waiting for staking address... Set it up using the CLI
```

4. Open a different terminal, and launch the command-line interface (CLI) for your node:

    ```
    docker exec -it worker cli
    ```

5. Type `setup` and enter your `staking address` when prompted. Enter `ok`

6. The software will then generate an `operating address` for you, which will be displayed on the logs and on the CLI.

7. Transfer some Kovan ETH (1 KETH will be plenty) to your `operating address`

8. In the `CLI`, type `register` and look at the logs from the first terminal. You should eventually see a line like this:

    ```
    worker    | 2019-12-19T13:30:41Z INFO [P2P-MainController] - [REGISTER] successful registration
    ```
9. Next you need to `setOperatingAddress()` and `deposit()` with your `staking Address`. We provide a bare-bones NodeJS script until nicer and more friedly user interfaces (UIs) are built. See the `client/` folder for instructions.

10. Finally, in the CLI, type `login` and look at the logs from the first terminal, You should eventually see a line like this:

    ```
    worker    | 2019-12-19T13:30:41Z INFO [P2P-MainController] - [LOGIN] successful login
    ```

🙌 CONGRATULATIONS 🙌 your node has successfully joined the Enigma Discovery Testnet and will start being eligible to run computations in the network at the next epoch change.



