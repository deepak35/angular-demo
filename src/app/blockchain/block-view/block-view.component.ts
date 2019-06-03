import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Block } from '../../model/block';
import { Content } from 'src/app/app.constants';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.css']
})
export class BlockViewComponent implements OnInit {

  public content: any;
  @Input('block')
  public block: Block;

  @Input('index')
  public index: number;

  @Output('transactionDetails')
  public transactionDetails = new EventEmitter();

  public transactions: Array<any>;
  public selectedBlock: number = null;
  constructor() { }

  ngOnInit() {
    this.content = Content;
  }

  setTransactionDetails(transactions: any, index: number) {
    this.transactionDetails.emit({ 'transactions' : transactions, 'blockIndex' : index});
  }

}
