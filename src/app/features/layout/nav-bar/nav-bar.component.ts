import { Component, inject } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../../core/service/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  private router:Router=inject(Router)
  private authService:AuthServiceService=inject(AuthServiceService)

  public isLogin:boolean=false

  ngOnInit():void
  {
    
    this.authService.userData.subscribe(()=>
    {
      if(this.authService.userData.getValue()==null)
      {
        this.isLogin=false
      }
      else
      {
        this.isLogin=true
      }
    })
  }



  logOut()
  {

    localStorage.removeItem('userToken');
    this.router.navigate(['/login']); 
    this.authService.userData.next(null);

  }


}
