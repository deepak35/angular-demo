import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../app.constants';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  public content: any;
  constructor() {
    this.content = Content
   }

  ngOnInit() {
  }

}
