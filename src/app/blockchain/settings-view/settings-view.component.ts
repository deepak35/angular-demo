import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/app.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChainProperties } from 'src/app/model/blockchainProperties';
import { BlockchainSettingsObservableService } from 'src/app/services/blockchain-settings.observable.service';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  public settingsForm: FormGroup;


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
    )
  }

}
