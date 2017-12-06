// Bringing in Web3 constructor from the web3 package to be able to use the Web3 API
import Web3 from 'web3';

// using web3 constructor to instantiate a web3 instance
// instance is tied to our blockchain (our TestRPC at localhost:8585)
const web3 = new Web3(new Web3.providers.HttpProviders("https://localhost:8585"));

// greeter ABI that we got by running Greeter.abi on the truffle console
let greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

// address of our greeter obtained by running Greeter.address on the truffle console.
let greeterAddress = '0x139b6a2d8f0075a6b054f950239a6981c8830ae7';

// creating a greeter contract by passing in our greeterABI at our greeter address
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);
// exporting our greeter contract to be used elsewhere
export(greeterContract);