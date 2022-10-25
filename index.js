const {Block, BlockChain} = require("./block");

const blockchain = new BlockChain();
blockchain.addBlock(new Block(Date.now().toString(), {from: "user1", to: "user2", amount: 10}));
blockchain.addBlock(new Block(Date.now().toString(), {from: "user2", to: "user3", amount: 5}));
blockchain.addBlock(new Block(Date.now().toString(), {from: "user3", to: "user1", amount: 2}));

console.log(blockchain.chain)