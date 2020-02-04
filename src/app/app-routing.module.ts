import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }, { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
