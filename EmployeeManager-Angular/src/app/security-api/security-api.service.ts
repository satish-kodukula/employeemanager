import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityApiService {

  baseUrl: string = 'http://localhost:5000/api/security';
  client: HttpClient;
  constructor(client: HttpClient) {
    this.client = client;
  }
  signIn(usr: User) {
    return this.client.post<any>(this.baseUrl + "/signin", usr);
  }
  register(usr: User) {
    return this.client.post(this.baseUrl + "/register", usr,{ responseType: 'text'});
  }

}
