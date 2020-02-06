import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { configToken } from '../shared/demo.token';
import { Config } from '../shared/demo.config';

export const configValue: Config = {
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
    provide: configToken, useValue: configValue
  }]
})
export class EmployeeModule {
  constructor() { }
}
