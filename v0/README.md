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

3. `docker-compose up`



