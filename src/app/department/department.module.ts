import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { IConfig } from '../shared/demo.config';
import { CONFIG_TOKEN } from '../shared/demo.token';

export const CONFIG_VALUE: IConfig = {
  apiEndPoint: 'xyz.com',
  timeout: 4000
};


@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  providers: [{
    provide: CONFIG_TOKEN, useValue: CONFIG_VALUE
  }]
})
export class DepartmentModule { }
