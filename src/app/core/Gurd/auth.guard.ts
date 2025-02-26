import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { PlatformService } from '../service/platform service/platform.service';
export const authGuard: CanActivateFn = (route, state) => {
  

  let platform:PlatformService=inject(PlatformService)
  let router:Router=inject(Router)

  if (platform.checkPlatform()) {


    if(localStorage.getItem('userToken')!=null)
    {
      return true
    }
    
  }

  router.navigate(['/login']);
  return false;


};
