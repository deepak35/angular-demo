import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/app.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChainProperties } from 'src/app/model/blockchainProperties';
import { BlockchainSettingsObservableService } from 'src/app/services/blockchain-settings.observable.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.5s ease-out')
      ]),
      transition('closed => open', [
        animate('0s')
      ]),
    ])
  ]
})
export class SettingsViewComponent implements OnInit {

  public settingsForm: FormGroup;
  public showSuccessMsg: boolean;
  public content = Content;
  constructor(private fb: FormBuilder,
              private _blockchainSettingsService: BlockchainSettingsObservableService) { }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      blockReward: [ChainProperties.blockReward, [Validators.required, Validators.pattern('[0-9]*'), Validators.max(100)]],
      difficulty: [ChainProperties.difficulty, [Validators.required, Validators.pattern('[0-9]*'), Validators.max(5)]],
      blockTransactions: [ChainProperties.transactionsPerBlock, [Validators.required, Validators.pattern('[0-9]*'), Validators.max(5)]]
    });
  }

  setSettings() {
    this._blockchainSettingsService.setSettings(
      {
        'difficulty': this.settingsForm.controls['difficulty'].value,
        'blockReward': this.settingsForm.controls['blockReward'].value,
        'blockTransactionsNumber': this.settingsForm.controls['blockTransactions'].value,
      }
    );

    this.showSuccessMsg = true;
    const self = this;
    setTimeout(() => {
      self.showSuccessMsg =  false;
    }, 1000);
  }

}
