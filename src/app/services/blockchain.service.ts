import { Injectable } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { Transaction } from '../model/transaction';
import { Content } from '../app.constants';
import { ec } from 'elliptic';
const EC = new ec('secp256k1');
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor() { }

  

  public createGenesisBlock(difficulty: number){
    const genesisTransaction = new Transaction(new Date(), 'SYSTEM', 'user1', 50);
    const genesisBlock = new Block(new Date(), [genesisTransaction], new Array(64).join('0'));
    genesisBlock.mineBlock(difficulty);

    return genesisBlock;
  }

  public createBlockchain(chainDifficulty: number, blockReward: number, blockTransactions: number){
    const genesisBlock = this.createGenesisBlock(chainDifficulty);
    const newBlockchain = new Blockchain([genesisBlock], chainDifficulty, blockReward, blockTransactions);

    return newBlockchain;
  }

  public generateNewBlock(blockchain: Blockchain){
    const newTransactions: Array<Transaction> = blockchain.pendingTransactions.splice(0, blockchain.blockTransactionsNumber);
    const validTransactions = newTransactions.filter(transaction => this.checkValidTransaction(transaction));
    const lastBlock = blockchain.getLastBlock();
    const newBlock: Block = new Block(new Date(), validTransactions, lastBlock.blockHash);
    newBlock.mineBlock(blockchain.difficulty);

    blockchain.chain.push(newBlock);

    return blockchain;
  }

  public checkValidTransaction(transaction: Transaction) {
    const pubKey = EC.keyFromPublic(Content.public, 'hex');

    return transaction.verifySignature(pubKey);
  }
}
