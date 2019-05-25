import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction';
import { Content } from 'src/app/app.constants';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.css']
})
export class PendingTransactionsComponent implements OnInit {

  public content: any = Content;
  public pendingTransactions: Array<Transaction> = [];
  public pendingTransactionsAvalable = false;
  constructor() { }

  ngOnInit() {
    console.log("PENDING VIEW");

  }

}
