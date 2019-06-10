import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css'],
  
})
export class AlertMessageComponent implements OnInit {

  @Input('typeOfAlert')
  public typeOfAlert: string;
  @Input('alertMessage')
  public alertMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
