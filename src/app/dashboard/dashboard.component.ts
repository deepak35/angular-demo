import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../app.constants';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public content: any;
  public blockchainCreated: boolean = true;
  constructor() { 
    this.content = Content
  }

  ngOnInit() {
    
  }

  createGenesisBlock() {
    console.log("clicked");
    this.blockchainCreated = true;
  }

}
