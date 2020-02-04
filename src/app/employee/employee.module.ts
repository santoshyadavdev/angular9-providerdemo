import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CONFIG_TOKEN } from '../shared/demo.token';
import { IConfig } from '../shared/demo.config';

export const CONFIG_VALUE: IConfig = {
  apiEndPoint: 'abc.com',
  timeout: 3000
};


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  providers: [{
    provide: CONFIG_TOKEN, useValue: CONFIG_VALUE
  }]
})
export class EmployeeModule {
  constructor() { }
}
