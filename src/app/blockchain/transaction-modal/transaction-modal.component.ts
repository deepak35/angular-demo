import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.css']
})
export class TransactionModalComponent implements OnInit {

  @Input('transactions')
  public transactions: Array<Transaction>;
  @Input('blockIndex')
  public blockIndex: number;

  constructor() { }

  ngOnInit() {
    console.log(this.transactions , "\n", this.blockIndex);
    
  }

}
