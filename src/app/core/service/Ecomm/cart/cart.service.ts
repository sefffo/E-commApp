import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private userHeaders:any={token: localStorage.getItem('userToken')};
  private httpClient:HttpClient=inject(HttpClient)
  constructor() { }


  addToCartApi(pId:string):Observable<any>
  {
    return this.httpClient.post(`${Env.baseUrl}/api/v1/cart`,{productId:pId},{headers:this.userHeaders});
  }
  updateCartApi(pId:string,pCount:number):Observable<any>
  {
    return this.httpClient.put(`${Env.baseUrl}/api/v1/cart/${pId}`,{count:pCount},{headers:this.userHeaders});
  }

  getCartApi():Observable<any>
  {
    return this.httpClient.get(`${Env.baseUrl}/api/v1/cart`,{headers:this.userHeaders});
  }
  removeCartApi(pId:string):Observable<any>
  {
    return this.httpClient.delete(`${Env.baseUrl}/api/v1/cart/${pId}`,{headers:this.userHeaders});
  }
  clearCartApi():Observable<any>
  {
    return this.httpClient.delete(`${Env.baseUrl}/api/v1/cart`,{headers:this.userHeaders});
  }
}
