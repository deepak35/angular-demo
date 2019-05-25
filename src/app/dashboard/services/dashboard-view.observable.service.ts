import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Content } from '../../app.constants';
@Injectable({
  providedIn: 'root'
})
export class DashboardViewObservableService {

  public dashboardView: BehaviorSubject<any>;

  constructor() {
    const initialView = {};
    initialView[Content.dashboardView.blockchain] = true;
    initialView[Content.dashboardView.addTransaction] = false;
    initialView[Content.dashboardView.pendingTransaction] = false;

    this.dashboardView = new BehaviorSubject(initialView);
  }

  setDashboardView(newDashboardView: any) {
    this.dashboardView.next(newDashboardView);
  }

  getDashboardView(): Observable<any>{
    return this.dashboardView.asObservable();
  }
}
