import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { Config } from '../shared/demo.config';
import { configToken } from '../shared/demo.token';

export const configValue: Config = {
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
    provide: configToken, useValue: configValue
  }]
})
export class DepartmentModule { }
