import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../app.constants';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public content: any;
  constructor() { 
    this.content = Content
  }

  ngOnInit() {
    
  }


}
