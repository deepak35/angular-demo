import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlockViewComponent } from './blockchain/block-view/block-view.component';
import { AddNewTransactionComponent } from './blockchain/add-new-transaction/add-new-transaction.component';
import { CommonComponentModule } from './common/common.module';
import { PendingTransactionsComponent } from './blockchain/pending-transactions/pending-transactions.component';
import { SettingsViewComponent } from './blockchain/settings-view/settings-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    BlockchainComponent,
    BlockViewComponent,
    AddNewTransactionComponent,
    PendingTransactionsComponent,
    SettingsViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonComponentModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
