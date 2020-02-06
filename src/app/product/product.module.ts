import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Config } from '../shared/demo.config';
import { configToken } from '../shared/demo.token';

export const configValue: Config = {
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
    provide: configToken, useValue: configValue
  }]
})
export class ProductModule { }
