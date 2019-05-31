import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.content = Content;
  }

}