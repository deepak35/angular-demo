import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../model/block';
import { Blockchain } from '../model/blockchain';
import { BlockchainService } from '../services/blockchain.service';
import { ChainProperties } from '../model/blockchainProperties';
import { Content } from 'src/app/app.constants';
import { AddTransactionService } from '../services/add-transaction.service';
import { DashboardViewObservableService } from '../services/dashboard-view.observable.service';
import { Transaction } from '../model/transaction';
import { BlockchainSettingsObservableService } from '../services/blockchain-settings.observable.service';

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
  public settingsView: boolean;
  public blockChain: Blockchain;
  public miningStarted: boolean;
  public transactions: Array<Transaction>;
  public blockIndex: number;

  constructor(private _blockchainService: BlockchainService,
              private _dashboardViewService: DashboardViewObservableService,
              private _transactionService: AddTransactionService,
              private _blockchainSettingsService: BlockchainSettingsObservableService) { }

  ngOnInit() {
    this.createGenesisBlock();
    this.content = Content;
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
    this._blockchainSettingsService.getSettings().subscribe(newSetting => {
      if (newSetting){
        for (const property in newSetting) {
          if (newSetting.hasOwnProperty(property)) {
            this.blockChain[property] = newSetting[property];
          }
        }
      }
    })
  }

  createGenesisBlock() {
// tslint:disable-next-line: max-line-length
    this.blockChain = this._blockchainService.createBlockchain(ChainProperties.difficulty, ChainProperties.blockReward, ChainProperties.transactionsPerBlock);
    this.blockchainCreated = true;
    this.blockchainView = true;
  }

  mineBlock(){
    if (this.blockChain.pendingTransactions.length > 0) {
      this.miningStarted = true;
      this.blockChain = this._blockchainService.generateNewBlock(this.blockChain);
      setTimeout(() => {
        this.miningStarted = false;
      }, 1000);
    }
  }

  transactionDetails(details: any){
    this.transactions = details.transactions;
    this.blockIndex = details.blockIndex;
  }

}
