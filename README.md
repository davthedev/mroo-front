# MROO (mroo-front)

Frontend for the MROO project, designed for the block.one hackathon.

Overview: https://devpost.com/software/mroo

**This project communicates with smart contracts on the EOS blockchain.**
Corresponding blockchain code is available here: https://github.com/smauret/eos-mini-uni/tree/master/contracts

Uses the Quasar framework on top of Vue.js

Important note : this is a hackathon / prototype codebase. Some details like proper error management, centralized state store are not implemented yet. Inconsistencies in variable namings may be present as well. The goal was to get a prototype up and running quickly and efficiently. Kudos for creators of Quasar Framework that made it possible!

## Install the dependencies
```bash
yarn
```

## Deploy contracts

You need to deploy two EOS contracts : *university* and *job*
See instructions in linked repo (see above)
You can deploy using test network.

## Add the environment files

You need to add a .env and a .env.example at the root of the project.
Put the necessary variables in the .env; you can leave the .env.example empty.

Contents of .env

```
NODE_PATH=src
#absolute path for require()
#DO NOT CHANGE NOR REMOVE THE ABOVE

REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY="university_contract_name"
REACT_APP_EOS_CONTRACT_NAME_JOB1="job_contract_name"
REACT_APP_EOS_PRIVATE_KEY_UNIVERSITY="your_private_key_university"
REACT_APP_EOS_PRIVATE_KEY_JOB1="your_private_key_job"
REACT_APP_EOS_HTTP_ENDPOINT="your_eos_endpoint"
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
