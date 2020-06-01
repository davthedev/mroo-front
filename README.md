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

## Add the environment files

You need to add a .env and a .env.example at the root of the project.
Put the necessary variables in the .env; you can leave the .env.example empty.

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
