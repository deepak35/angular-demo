import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './alert-message/alert-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AlertMessageComponent],
  declarations: [AlertMessageComponent]
})
export class CommonComponentModule { }
