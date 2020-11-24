import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() { 
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization','Bearer '+token);
    let options = {headers : headers}

    return this.http.get('/api/orders',options).map(response=>response['body']);
  }
}
