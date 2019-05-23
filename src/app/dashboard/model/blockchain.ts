import { Block } from './block';
import { Transaction } from './transaction';

export class Blockchain {

    public chain: Array<Block>;
    public difficulty: number;
    public blockReward: number;
    public pendingTransactions: Array<Transaction> = [];

    constructor(chain: Array<Block>, difficulty: number, blockReward: number){
        this.chain = chain;
        this.difficulty = difficulty;
        this.blockReward = blockReward;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }
}
