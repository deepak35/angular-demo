import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { BlockService } from '../services/block.service';
import { ChainProperties } from '../model/blockchainProperties';
import { Content } from 'src/app/app.constants';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  public content: any;

  @Input('blockchainCreated')
  public blockchainCreated: boolean;

  public blockChain: Blockchain;

  constructor(private _blockService: BlockService) { }

  ngOnInit() {

    this.content = Content;

    const genesisBlock = new Block(new Date(), [], '0');
    genesisBlock.mineBlock(ChainProperties.difficulty);

    this.blockChain = new Blockchain([genesisBlock], ChainProperties.difficulty, ChainProperties.blockReward);

  }

}
