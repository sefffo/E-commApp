import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../../core/service/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

    errorMessage:string='';
    isLoading:boolean=false;
    private authService:AuthServiceService=inject(AuthServiceService);
    private router=inject(Router);
    private toastrService:ToastrService=inject(ToastrService);
  
  
      verifyForm:FormGroup=new FormGroup({
        //validators ====> sho8l angular
        resetCode: new FormControl(null),
    
      })//enta hena bt7ot el custome validation bta3k
  
      VerifyCodeSubmit()
      {
  
        const data={resetCode:String(this.verifyForm.value.resetCode)}
        this.isLoading=true;
        this.authService.verifyCode(data).subscribe({
          next:(res)=>
          {
            console.log(res);
            this.isLoading=false;
            if(res.status==='Success')
              {
              this.toastrService.success(res.message,'Success');
              console.log('done');
              this.router.navigate(['/resetPass']);
            }
          },
          error:(err)=>
          {

            this.isLoading=false;

            console.log(err);
            this.errorMessage=err.error.message
            this.toastrService.error(this.errorMessage,'Error');
          }
        })
  
  
      }
  

}
