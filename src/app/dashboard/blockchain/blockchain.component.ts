import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { BlockchainService } from '../services/blockchain.service';
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

  constructor(private _blockchainService: BlockchainService) { }

  ngOnInit() {
    this.content = Content;
    this.blockChain = this._blockchainService.createBlockchain(ChainProperties.difficulty, ChainProperties.blockReward);
  }

  addTransaction(){
    
  }
}
