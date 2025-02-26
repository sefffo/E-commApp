import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay,  } from 'rxjs';
import { Env } from '../../Environment/environment';


@Injectable({
  providedIn: 'root'
})
export class RxjsTestService {

  constructor() { }

  private httpClient:HttpClient=inject(HttpClient)

  private $products:Observable<any>|null=null;
  private $Brands:Observable<any>|null=null;
  private $Cats:Observable<any>|null=null;

  getProdsWithShareReply():Observable<any>|null
  {

    if(!this.$products)
    {
      this.$products=this.httpClient.get<any>(`${Env.baseUrl}/api/v1/products`).pipe(shareReplay(1));
    }
    return this.$products
  }


  getProdsWithPrice(price:string):Observable<any>
  {
    return this.httpClient.get<any>(`${Env.baseUrl}/api/v1/products?price[gte]=${price}`);
  }

  getBrandsWithShareReply():Observable<any>|null
  {

    if(!this.$Brands)
    {
      this.$Brands=this.httpClient.get<any>(`${Env.baseUrl}/api/v1/brands`).pipe(shareReplay(1));
    }
    return this.$Brands;
  }

  getCatsWithShareReply():Observable<any>|null
  {

    if(!this.$Cats)
    {
      this.$Cats=this.httpClient.get<any>(`${Env.baseUrl}/api/v1/categories`).pipe(shareReplay(1));
    }
    return this.$Cats;
  }

  

}
