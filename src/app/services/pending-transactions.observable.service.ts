import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class PendingTransactionsObservableService {

  public transactions: BehaviorSubject<Array<Transaction>>;

  constructor() {
    this.transactions = new BehaviorSubject([]);
  }

  setPendingTransactions(newTransactions: Array<Transaction>) {
    this.transactions.next(newTransactions);
  }

  getPendingTransactions(): Observable<Array<Transaction>>{
    return this.transactions.asObservable();
  }
}
