import {SHA256} from 'crypto-js';
import { Transaction } from './transaction';

export class Block {
    public timestamp: any;
    public transactions: Array<any>;
    public previousBlockHash: any;
    public nonce: any = 0;
    public blockHash: any;

    constructor(timestamp: Date, transactions: any, previousBlockHash: any) {
        this.timestamp = timestamp.getTime();
        this.transactions = transactions;
        this.previousBlockHash = previousBlockHash;
    }

    public calculateBlockHash() {
        return SHA256(this.nonce + this.timestamp + JSON.stringify(this.transactions) + this.previousBlockHash).toString();
    }

    public mineBlock(difficulty: number) {
        const checkString = Array(difficulty).fill(0).join('');
        let hash = this.calculateBlockHash();

        while (hash.substr(0, difficulty) !== checkString) {
          this.nonce += 1;
          hash = this.calculateBlockHash();
        }

        this.blockHash = hash;
    }
}
