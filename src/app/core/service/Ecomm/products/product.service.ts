import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { Env } from '../../../Environment/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }







  private httpClient:HttpClient=inject(HttpClient)

  getAllProducts():Observable<any>
  {
    return this.httpClient.get(`${Env.baseUrl}/api/v1/products`);
    
  }


  getSpecificProduct(pId:string|null):Observable<any>
  {
    return this.httpClient.get(`${Env.baseUrl}/api/v1/products/${pId}`)
  }
}
