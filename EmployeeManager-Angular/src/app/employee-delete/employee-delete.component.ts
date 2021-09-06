import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesApiService } from '../countries-api/countries-api.service';
import { EmployeesApiService } from '../employees-api/employees-api.service';
import { Country } from '../models/country';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  formBuilder: FormBuilder;
  route: ActivatedRoute;
  id: number;
  router: Router;
  employeesApi: EmployeesApiService;
  countriesApi: CountriesApiService;
  deleteForm: FormGroup;
  message: string;
  employee: Employee;
  
  constructor(formBuilder: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    employeesApi: EmployeesApiService,
    countriesApi: CountriesApiService) {
      this.formBuilder = formBuilder;
      this.route = route;
      this.router = router;
      this.employeesApi = employeesApi;
      this.countriesApi = countriesApi;

      if (this.route.snapshot.params["id"]) {
        this.id = this.route.snapshot.params["id"];
      }
    
      this.deleteForm = this.formBuilder.group({
        employeeID: ['', [Validators.required]]
      });


    }

  ngOnInit() {
    
    if (!sessionStorage.hasOwnProperty("token")) {
      this.router.navigate(["/signin"]);
    }

    this.employeesApi.selectByID(this.id)
    .subscribe((data:any) => {
      this.employee = data as Employee;
        this.deleteForm.controls['employeeID'].setValue(this.employee.employeeID);
    }, error => {
      if (error.status === 401) {
        this.router.navigate(["/signin"]);
      }
      this.message = error.message
    });  
  }

  delete_click() {
    if (this.deleteForm.invalid) {
      this.message = "One or more values are invalid.";
      return;
    }
      this.employeesApi.delete(this.deleteForm.controls["employeeID"].value)
          .subscribe(() => {
              sessionStorage.setItem("message", "Employee deleted successfully!"
              );
              this.router.navigate(['/employees/list']);
          }, error => {
              if (error.status === 401) {
                  this.router.navigate(["/signin"]);
              }
              this.message = error.message
          });
  }


  cancel_click() {
    this.router.navigate(["/employees/list"]);
  }
}

