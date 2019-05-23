import { Injectable } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor() { }

  public createGenesisBlock(difficulty: number){
    const genesisTransaction = new Transaction('SYSTEM', 'user1', 50);
    const genesisBlock = new Block(new Date(), [genesisTransaction], '0');
    genesisBlock.mineBlock(difficulty);

    return genesisBlock;
  }

  public createBlockchain(chainDifficulty: number, blockReward: number){
    const genesisBlock = this.createGenesisBlock(chainDifficulty);
    const newBlockchain = new Blockchain([genesisBlock], chainDifficulty, blockReward);

    return newBlockchain;
  }
}
