import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class AddTransactionService {

  public transaction: BehaviorSubject<Transaction>;

  constructor() {
    this.transaction = new BehaviorSubject(null);
  }

  setTransaction(newTransaction: Transaction) {
    this.transaction.next(newTransaction);
  }

  getTransaction(): Observable<Transaction>{
    return this.transaction.asObservable();
  }
}
