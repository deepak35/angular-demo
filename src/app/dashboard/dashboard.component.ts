import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../app.constants';
import { DashboardViewObservableService } from './services/dashboard-view.observable.service';
import { AddTransactionService } from './services/add-transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public content: any;
  public blockchainCreated: boolean;
  public blockchainView: boolean;
  public addNewTransactionView: boolean;
  public pendingTransactionView: boolean;
  constructor(private _dashboardViewService: DashboardViewObservableService,
              private _transactionService: AddTransactionService) {
    this.content = Content;
  }

  ngOnInit() {
    console.log("DASHBOARD VIEW");

    this.blockchainView = true;
    this.addNewTransactionView = false;
    this.pendingTransactionView = false;
    this.blockchainCreated = true;

    this._dashboardViewService.getDashboardView().subscribe(dashboardView => {
      for (const view in dashboardView) {
        if (dashboardView.hasOwnProperty(view)) {
          this[view] = dashboardView[view];
        }
      }
    });

    this._transactionService.getTransaction().subscribe(transaction => {
      if (transaction) {
        // this.pendingTransactions.push(transaction);
        // this.pendingTransactionsAvalable = true;
        // console.log(this.pendingTransactions);
        
      }
    });
  }

  createGenesisBlock() {
    console.log("clicked");
    this.blockchainCreated = true;
    this.blockchainView = true;
  }

  setAddNewTransactionView() {
    this.blockchainView = false;
    this.pendingTransactionView = false;

    this.addNewTransactionView = true;
  }

}
