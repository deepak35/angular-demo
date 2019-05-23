import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-transaction',
  templateUrl: './add-new-transaction.component.html',
  styleUrls: ['./add-new-transaction.component.css']
})
export class AddNewTransactionComponent implements OnInit {

  public transaction: any = {};
  public newTransactionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newTransactionForm = this.fb.group({
      from: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
      to: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
      amount: ['', [Validators.required, Validators.pattern('[0-9.]*'), Validators.min(0.001)]]
    });
  }

  addTransaction(){

  }

}
