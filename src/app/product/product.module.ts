import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { IConfig } from '../shared/demo.config';
import { CONFIG_TOKEN } from '../shared/demo.token';

export const CONFIG_VALUE: IConfig = {
  apiEndPoint: 'edf.com',
  timeout: 5000
};

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [{
    provide: CONFIG_TOKEN, useValue: CONFIG_VALUE
  }]
})
export class ProductModule { }
