require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note pave coconut hunt help equal genre'; 
let testAccounts = [
"0x7fba52c616a3b4305e1504cabdd4e8e02e7e5594ed4a176d7532724e3b846016",
"0x3a345e39200bd0136d4cba5db7398667c79c5858c99efd8a306871078adf86b2",
"0xe2441dbc4887b5f622af1c1b3d3ad83895f959a6c98b89456898261906d794ac",
"0x3a4c1476ccf249773092f62a45cb9c2ac67061533ed95215541c37e6ab31e3b9",
"0xee78c69b23a3c57d970d2cf24614359a983918d535f46ba89470ec3546be81ad",
"0xf4dbae4ec1eccf47b358e524563709d682d9f844dbad98b0e521bbb62be20fde",
"0x13f139f5c07860dd50387e458ca720228c91dbb781490455ceab234be0c41c68",
"0x38174921864c48c7e1d61ec8fe869966218919755036af2c5adc756190060724",
"0xf9220971208f12e5cf4426b033b786a91aa08912ebd522025ef690d4a7e4dfe7",
"0xab6fa0a365d5d02721904fe6bb982e1ec667368027d5ac829bef11c092db16fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

