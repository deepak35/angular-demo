import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BlockchainComponent } from './dashboard/blockchain/blockchain.component';
import { BlockViewComponent } from './dashboard/blockchain/block-view/block-view.component';
import { AddNewTransactionComponent } from './dashboard/blockchain/add-new-transaction/add-new-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    DashboardComponent,
    BlockchainComponent,
    BlockViewComponent,
    AddNewTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
