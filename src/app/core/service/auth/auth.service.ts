import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { PlatformService } from '../platform service/platform.service';
import { Env } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private platformService:PlatformService=inject(PlatformService)
  constructor() { 
    //3sahn lma a3ml refresh w ana 3amel login afdl m7afez 3 el ul w ana b listen 3 al userData
    
    if(this.platformService.checkPlatform())
    {
      if(localStorage.getItem('userToken'))//3shan a3ml tany check lw msh 3amel login mydesh error
      {
        this.saveData();
      }
    }
  }

  public userData:BehaviorSubject<any>=new BehaviorSubject(null) ;


  private httpClient:HttpClient=inject(HttpClient);

  sendRegisterToApi(data:object):Observable<any>
  {
    return this.httpClient.post(`${Env.baseUrl}/api/v1/auth/signup`, data)
  }
  sendLoginToApi(data:object):Observable<any>
  {
    return this.httpClient.post(`${Env.baseUrl}/api/v1/auth/signin`, data)
  }





  sendForgetToApi(data:object):Observable<any>
  {

    return this.httpClient.post(`${Env.baseUrl}/api/v1/auth/forgotPasswords`, data)

  }

  verifyCode(data:object):Observable<any>
  {
    return this.httpClient.post(`${Env.baseUrl}/api/v1/auth/verifyResetCode`, data)
  }


  resetPass(data:object):Observable<any>
  {
    return this.httpClient.put(`${Env.baseUrl}/api/v1/auth/resetPassword`, data)
  }





  saveData()
  {

    this.userData.next(jwtDecode( JSON.stringify(localStorage.getItem('userToken'))));
  }
}
