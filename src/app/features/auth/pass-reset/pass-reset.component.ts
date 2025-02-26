import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pass-reset',
  imports: [ReactiveFormsModule],
  templateUrl: './pass-reset.component.html',
  styleUrl: './pass-reset.component.scss'
})
export class PassResetComponent {


    errorMessage:string='';
    isLoading:boolean=false;
    private authService:AuthServiceService=inject(AuthServiceService);
    private router=inject(Router);
    private toastrService:ToastrService=inject(ToastrService);
  
  
      ResetForm:FormGroup=new FormGroup({
        //validators ====> sho8l angular
        email: new FormControl(null ,  [Validators.required , Validators.email]),
        newPassword: new FormControl(  null , [ Validators.required , Validators.pattern (/^[A-Z][a-zA-Z0-9]{6,10}$/)]), 
    
      })//enta hena bt7ot el custome validation bta3k


      resersubmit()
      {
        this.isLoading=true;

        this.authService.resetPass(this.ResetForm.value).subscribe({

          next:(res)=>
          {
            // console.log(res);
            this.isLoading=false;
            this.toastrService.success(res.message,'Success');
            console.log('done');
            this.router.navigate(['/login']);
            
          },
          error:(err)=>
          {
            this.isLoading=false;
            this.errorMessage=err.error.message
            this.toastrService.error(this.errorMessage,'Error');
            console.log(err);
          }

        })



      }
  

}
