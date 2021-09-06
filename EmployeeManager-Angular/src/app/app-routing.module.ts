import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeInsertComponent } from './employee-insert/employee-insert.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  { path: "employees/list", component: EmployeeListComponent },
  { path: "employees/update", component: EmployeeUpdateComponent },
  { path: "employees/insert", component: EmployeeInsertComponent },
  { path: "employees/delete", component: EmployeeDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
