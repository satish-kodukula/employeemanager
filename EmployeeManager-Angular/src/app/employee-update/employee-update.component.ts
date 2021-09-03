import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesApiService } from '../countries-api/countries-api.service';
import { EmployeesApiService } from '../employees-api/employees-api.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  formBuilder: FormBuilder;
  route: ActivatedRoute;
  id: number;
  router: Router;
  employeesApi: EmployeesApiService;
  countriesApi: CountriesApiService;
  updateForm: FormGroup;
  message: string;
  countries: Array<Country>;
  
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
    //...
    }

  ngOnInit(): void {
    this.employeesApi.selectByID(this.id)
    .subscribe((data:any) => {
      data.birthDate = data.birthDate.substring(0,10);
      data.hireDate = data.hireDate.substring(0,10);
      this.updateForm.setValue(data);
    }, error => {
        if(error.status === 401) {
          this.router.navigate(["/signin"])
        }
        this.message = error.message;        
    });    
  }

  cancel_click() {
    this.router.navigate(["/employees/list"]);
  }

  save_click() {
    this.router.navigate(["/employees/list"]);
  }
}
