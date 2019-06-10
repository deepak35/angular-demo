import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTransactionService } from '../../services/add-transaction.service';
import { Transaction } from '../../model/transaction';
import { Content } from 'src/app/app.constants';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-add-new-transaction',
  templateUrl: './add-new-transaction.component.html',
  styleUrls: ['./add-new-transaction.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.5s ease-out')
      ]),
      transition('closed => open', [
        animate('0s')
      ]),
    ])
  ]
})
export class AddNewTransactionComponent implements OnInit {

  public content: any;
  public transaction: any = {};
  public showSuccessMsg = false;
  public newTransactionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private _transactionService: AddTransactionService) { }

  ngOnInit() {
    this.content = Content;

    this.newTransactionForm = this.fb.group({
      from: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
      to: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
      amount: ['', [Validators.required, Validators.pattern('[0-9.]*'), Validators.min(0.001)]]
    });
  }

  addTransaction(){
    const transaction = new Transaction(new Date(), this.newTransactionForm.controls['from'].value,
                                      this.newTransactionForm.controls['to'].value,
                                      this.newTransactionForm.controls['amount'].value);

    this._transactionService.setTransaction(transaction);

    this.showSuccessMsg = true;
    let self = this;
    setTimeout(() => {
      self.showSuccessMsg =  false;
    }, 1000);
  }

}
