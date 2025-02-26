import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-pass',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.scss'
})
export class ForgetPassComponent {

  errorMessage:string='';
  isLoading:boolean=false;
  private authService:AuthServiceService=inject(AuthServiceService);
  private router=inject(Router);
  private toastrService:ToastrService=inject(ToastrService);


    ForgetForm:FormGroup=new FormGroup({
      //validators ====> sho8l angular
      email: new FormControl(null ,  [Validators.required , Validators.email]),
  
    })//enta hena bt7ot el custome validation bta3k

    VerifySubmit()
    {


      this.isLoading=true;
      this.authService.sendForgetToApi(this.ForgetForm.value).subscribe({
        next:(res)=>
        {
          console.log(res);
          this.isLoading=false;
          if(res.statusMsg==='success')
          {
            this.toastrService.success(res.message,'Success');
            console.log('done');
            this.router.navigate(['/verify']);
          }
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
