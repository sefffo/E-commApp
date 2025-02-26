import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  /**
   * Returns true if the platform is a browser and false if it is not.
   * This is useful for making decisions based on whether the application is running in a browser or on the server.
   */
  checkPlatform()
  {
    if(isPlatformBrowser (this.platformId))
    {
      return true
    }
    else{

      return false
    }
  }
}
