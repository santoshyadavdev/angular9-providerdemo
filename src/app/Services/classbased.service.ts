import { Injectable } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { DepartmentModule } from '../department/department.module';

@Injectable({
  // tree shakable
  providedIn: 'root'
})
export class ClassbasedService {

  constructor() { }
}
