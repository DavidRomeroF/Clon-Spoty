import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrderListPipe
  ],
  exports: [
    OrderListPipe
  ]
})
export class SharedModule { }
