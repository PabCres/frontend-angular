import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  orderUrl: string = 'https://nodeapi-losabuelos.herokuapp.com';

  order:any;

  orders:any;

  creatOrder(newOrder) {
    return this.http.post(this.orderUrl + '/neworder', newOrder, { withCredentials: true })
      .pipe(map((res: any) => {
        this.order = res;
        return this.order;
      }));
  }

  getOrder() {
    return this.http.get(this.orderUrl + '/order', { withCredentials: true })
	    .pipe(map((res: any) => {
        this.order = res;
        return this.order;
	    }));
  }

  getOrders() {
    return this.http.get(this.orderUrl + '/orders')
	    .pipe(map((res: any) => {
        this.order = res;
        return this.order;
	    }));
  }
}
