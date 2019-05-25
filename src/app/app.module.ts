import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './dashboard/left-nav/left-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BlockchainComponent } from './dashboard/blockchain/blockchain.component';
import { BlockViewComponent } from './dashboard/blockchain/block-view/block-view.component';
import { AddNewTransactionComponent } from './dashboard/blockchain/add-new-transaction/add-new-transaction.component';
import { CommonComponentModule } from './common/common.module';
import { PendingTransactionsComponent } from './dashboard/blockchain/pending-transactions/pending-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    DashboardComponent,
    BlockchainComponent,
    BlockViewComponent,
    AddNewTransactionComponent,
    PendingTransactionsComponent
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
