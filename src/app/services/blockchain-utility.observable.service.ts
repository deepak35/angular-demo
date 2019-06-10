import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlockchainUtilityObservableService {

  public miningStarted: BehaviorSubject<boolean>;

  constructor() {
    this.miningStarted = new BehaviorSubject(false);
  }

  setMiningStarted(newDashboardView: boolean) {
    this.miningStarted.next(newDashboardView);
  }

  getMiningStarted(): Observable<boolean>{
    return this.miningStarted.asObservable();
  }
}
