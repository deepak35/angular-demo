import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { BlockService } from '../services/block.service';
import { ChainProperties } from '../model/blockchainProperties';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  @Input('blockchainCreated')
  public blockchainCreated: boolean;

  public chain: Blockchain;

  constructor(private _blockService: BlockService) { }

  ngOnInit() {
    console.log('generating genesis block..');

    const genesisBlock = new Block(new Date(), [], '0');
    genesisBlock.mineBlock(ChainProperties.difficulty);

    this.chain = new Blockchain([genesisBlock], ChainProperties.difficulty, ChainProperties.blockReward);

    console.log("chain" + JSON.stringify(this.chain.chain[0]));
  }

}
