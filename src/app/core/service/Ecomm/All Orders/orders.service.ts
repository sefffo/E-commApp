import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  private userHeaders:any={token: localStorage.getItem('userToken')};


  private httpClient:HttpClient=inject(HttpClient);
  constructor() { }

  checkOut(cartId:string, addressFormValue:object):Observable<any>
  {


    return this.httpClient.post(`${Env.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${Env.ecommUrl}`,{
      shippingAddress: addressFormValue
  

    },{
      headers:this.userHeaders
    })
  }
}
