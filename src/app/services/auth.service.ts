import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).map(response=>{
        console.log('login auth service: ',response);
        if(response && response['token']){
          localStorage.setItem('token',response['token']);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if(!token)
      return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log('expirationDate: ',expirationDate, ' isExpired: ',isExpired);
    return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }

}

