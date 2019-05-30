import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { BlockchainService } from '../services/blockchain.service';
import { ChainProperties } from '../model/blockchainProperties';
import { Content } from 'src/app/app.constants';
import { AddTransactionService } from '../services/add-transaction.service';
import { DashboardViewObservableService } from '../services/dashboard-view.observable.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  public content: any;
  public blockchainCreated: boolean;
  public blockchainView: boolean;
  public addNewTransactionView: boolean;
  public pendingTransactionView: boolean;
  public blockChain: Blockchain;

  constructor(private _blockchainService: BlockchainService,
              private _dashboardViewService: DashboardViewObservableService,
              private _transactionService: AddTransactionService) { }

  ngOnInit() {
    this.createGenesisBlock();
    this.content = Content;
    console.log("BLOCKCHAIN VIEW");
    this._dashboardViewService.getDashboardView().subscribe(dashboardView => {
      for (const view in dashboardView) {
        if (dashboardView.hasOwnProperty(view)) {
          this[view] = dashboardView[view];
        }
      }
    });
    this._transactionService.getTransaction().subscribe(transaction => {
      if (transaction) {
        this.blockChain.pendingTransactions.push(transaction);
        console.log(this.blockChain.pendingTransactions);
      }
    });
  }

  createGenesisBlock() {
    this.blockChain = this._blockchainService.createBlockchain(ChainProperties.difficulty, ChainProperties.blockReward, ChainProperties.transactionsPerBlock);
    this.blockchainCreated = true;
    this.blockchainView = true;
  }

  setAddNewTransactionView(){
    this.blockchainView = false;
    this.pendingTransactionView = false;

    this.addNewTransactionView = true;
  }

  mineBlock(){
    this.blockChain = this._blockchainService.mineBlock(this.blockChain);
  }
  
}
