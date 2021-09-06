import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EmployeesApiService } from './employees-api/employees-api.service';
import { CountriesApiService } from './countries-api/countries-api.service';
import { SecurityApiService } from './security-api/security-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInsertComponent } from './employee-insert/employee-insert.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { SignOutComponentComponent } from './sign-out-component/sign-out-component.component';
// import { SigInComponentComponent } from './sig-in-component/sig-in-component.component';
// import { SignOutComponentComponent } from './sign-out-component/sign-out-component.component';
// import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeInsertComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteComponent,
    SignOutComponentComponent
    // SigInComponentComponent,
    // SignOutComponentComponent,
    // SignInComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    EmployeesApiService,
    CountriesApiService,
    SecurityApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
