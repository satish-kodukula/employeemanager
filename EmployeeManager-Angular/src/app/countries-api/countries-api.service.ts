import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  baseUrl: string = 'http://localhost:5000/api/countries';
  client!: HttpClient;
  constructor(client: HttpClient) {
    this.client = client;
  }

  selectAll() {
    return this.client.get(this.baseUrl, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + sessionStorage.getItem('token')
      })
    });
  }

}
