import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Content } from '../app.constants';
@Injectable({
  providedIn: 'root'
})
export class BlockchainSettingsObservableService {

  public settings: BehaviorSubject<any>;

  constructor() {
    this.settings = new BehaviorSubject(null);
  }

  setSettings(setting: any) {
    this.settings.next(setting);
  }

  getSettings(): Observable<any>{
    return this.settings.asObservable();
  }
}
