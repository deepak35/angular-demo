import { Component } from '@angular/core';
import { Content } from './app.constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public content: any;

  constructor() {
    this.content = Content;
  }
}
