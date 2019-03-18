import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	usersUrl: string = 'https://nodeapi-losabuelos.herokuapp.com';

	user:any = {};

  constructor(private http: HttpClient) { }

  getUserDetails(loginUser)
  {
    return this.http.post(this.usersUrl + '/users', loginUser, { withCredentials: true })
    .pipe(map((res: any) => {
        this.user = res;
        return this.user;
    }));
  }

  creatNewUser(registerUser)
  {
    return this.http.post(this.usersUrl + '/newuser', registerUser)
    .pipe(map((res: any) => {
          this.user = res;
          return this.user;
      }));
  }

  logged() {
    return this.http.get('/user', { withCredentials: true })
    .pipe(map((res: any) => {
        this.user = res;
        return this.user;
    }));
  }

  logout() {
    return this.http.get(this.usersUrl + '/logout', { withCredentials: true })
    .pipe(map((res: any) => {
        this.user = res;
        return this.user;
    }));
  }
}
