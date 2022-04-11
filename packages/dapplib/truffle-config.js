require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind evil install beauty flock swear'; 
let testAccounts = [
"0xfa62dad579ca7428ec78d9b40a3e99c5774fbd8085617f18a289eaa5ac21a1d9",
"0xfd0fe20b35f7cba715f725e0e88ccafac60d5ffdc5eeabef5f002561b82a6fa9",
"0x4be86656c68f55e2b2804f3f201067ac0cf906daca47e7fa7405b0aab3a7aabe",
"0x515cfed1468f1a3e5eeb3402809a26b6ab013b13d9e1a8a70f5a2c0ff08a8e40",
"0x88009c9c5252c8964118cfb4b19c704379b718779f653a89b91394f15358dfd1",
"0xc320c95fdb8402c42e60ff2968713bceaad52ecf20595871796a54f260fb5c05",
"0x12d3893b4a2b3350a5a46e253ba9048ef5a3e0801c67a37b71380870748f9e87",
"0x1a9d20983cec7ac15e732cf8ff21f4a33cbc2a2fe473690e3f74186dc115203f",
"0x24d18521ec3f7108ceef56e323cb1c2db0a7f2e4ba3ef13e7f1154507d5a77ca",
"0x6c018e70d26aa5ed94cab6328caaba235cc607edc3acb62d8cf7e61c136f2ed8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

