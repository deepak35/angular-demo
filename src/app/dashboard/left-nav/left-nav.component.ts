import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../../app.constants';
import { DashboardViewObservableService } from '../services/dashboard-view.observable.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  public content: any;
  constructor(private _dashboardViewService: DashboardViewObservableService) {
    this.content = Content;
   }

  ngOnInit() {
    console.log("LEFT VIEW");

  }

  setPendingTransactionView(){
    const newView = {};
    newView[Content.dashboardView.blockchain] = false;
    newView[Content.dashboardView.addTransaction] = false;
    newView[Content.dashboardView.pendingTransaction] = true;

    this._dashboardViewService.setDashboardView(newView);
  }

}
