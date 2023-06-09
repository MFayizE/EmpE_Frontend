import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const serverURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  byPassedHttp: HttpClient
  constructor(private http: HttpClient, private handler: HttpBackend) {
    this.byPassedHttp = new HttpClient(handler);
  }

  createUser(data) {
    return this.byPassedHttp.post(serverURL + `api/users/register`, data)


  }

  listUsers() {
    return this.http.get(serverURL + `api/users/list`)
  }

  addPerformance(data) {
    return this.http.post(serverURL + `api/performance/add`, data)
  }

  getMe() {
    return this.http.get(serverURL + `api/users/me`)
  }
  

}
