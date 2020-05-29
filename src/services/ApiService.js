import {Api, JsonRpc} from 'eosjs';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig'


const REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY="samjungled12"
const REACT_APP_EOS_CONTRACT_NAME_JOB1="igloojungled"
const REACT_APP_EOS_PRIVATE_KEY_UNIVERSITY="5JsBw1KEnB4UFkbveNWHf9sMUniuqPdGimeQcH7cjJoUFMP85Go"
const REACT_APP_EOS_HTTP_ENDPOINT="http://jungle2.cryptolions.io:80"

// Main action call to blockchain
async function takeActionUniversity(action, dataValue) {
    const privateKey = REACT_APP_EOS_PRIVATE_KEY_UNIVERSITY;
    const rpc = new JsonRpc(REACT_APP_EOS_HTTP_ENDPOINT);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder()});

    // Main call to blockchain after setting action, account_name and data
    try {
        const resultWithConfig = await api.transact({
            actions: [{
                account: REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY,
                name: action,
                authorization: [{
                    actor: REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY,
                    permission: 'owner',
                }],
                data: dataValue,
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        });
        return resultWithConfig;
    } catch (err) {
        throw(err)
    }
}

async function takeActionJob1(action, dataValue) {
    const privateKey = '5JAgX9f7x1UGq1Mda4JmEsJQpy7cxYNbATJg5CWnpJhp5WawVdk';
    const rpc = new JsonRpc(REACT_APP_EOS_HTTP_ENDPOINT);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder()});

    // Main call to blockchain after setting action, account_name and data
    try {
        const resultWithConfig = await api.transact({
            actions: [{
                account: REACT_APP_EOS_CONTRACT_NAME_JOB1,
                name: action,
                authorization: [{
                    actor: REACT_APP_EOS_CONTRACT_NAME_JOB1,
                    permission: 'active',
                }],
                data: dataValue,
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        });
        return resultWithConfig;
    } catch (err) {
        throw(err)
    }
}

class ApiService {
    static async getTableStudents() {
        try {
            const rpc = new JsonRpc(REACT_APP_EOS_HTTP_ENDPOINT);
            console.log('endpoint blockchain:', REACT_APP_EOS_HTTP_ENDPOINT)
            const result = await rpc.get_table_rows({
                "json": true,
                "code": REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY,    // contract who owns the table
                "scope": REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY,    // scope of the table
                "table": "students",    // name of the table as specified by the contract abi
                "key_type": "i64",
                "index_position": 2
            });
            return result;
        } catch (err) {
            console.error(err);
        }
    }

    static async getTableProfessors() {
        try {
            const rpc = new JsonRpc(REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY,    // contract who owns the table
                "scope": REACT_APP_EOS_CONTRACT_NAME_UNIVERSITY,   // scope of the table
                "table": "professors",    // name of the table as specified by the contract abi
            });
            return result;
        } catch (err) {
            console.error(err);
        }
    }

    static async upsertStudent(dataValue) {
        try {
            takeActionUniversity("upsertsdt", dataValue)
        } catch (err) {
            console.log(err)
        }
    }

    static async upsertProf(dataValue) {
        try {
            takeActionUniversity("upsertpf", dataValue)
        } catch (err) {
            console.log(err)
        }
    }

    static async getJobDetails() {
        try {
            const rpc = new JsonRpc(REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": REACT_APP_EOS_CONTRACT_NAME_JOB1,    // contract who owns the table
                "scope": REACT_APP_EOS_CONTRACT_NAME_JOB1,   // scope of the table
                "table": "jobinfo",    // name of the table as specified by the contract abi
            });
            return result;
        } catch (err) {
            console.error(err);
        }
    }

    static async setJobDetails(dataValue){
        try {
            takeActionJob1("setdetails", dataValue)
        } catch (err) {
            console.log(err)
        }
    }

    static async closeUniversity() {
        try {
            takeActionUniversity("closeuni", {})
        } catch (err) {
            console.log(err)
        }
    }
}

export default ApiService;