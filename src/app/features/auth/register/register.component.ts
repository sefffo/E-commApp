import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../core/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private authService:AuthServiceService=inject(AuthServiceService)

  isLoading:boolean=false;

  private router:Router=inject(Router);
  errorMessage:string='';

  registerForm:FormGroup=new FormGroup({

    name: new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3),]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[ Validators.required , Validators.pattern (/^[A-Z][a-zA-Z0-9]{6,10}$/)]),
    rePassword: new FormControl(null,[ Validators.required , Validators.pattern (/^[A-Z][a-zA-Z0-9]{6,10}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),


  }, this.confirmPassword )

  confirmPassword(g:AbstractControl)
  {
    if(g.get('password')?.value===g.get('rePassword')?.value) // 3shan at2kd en al rage3 msh null ?
    {
      return null
    }
    else{

      return{'missMatched':true}//rg3t el error bnfs shakl el angular validators 
    }
  }



  registerSubmit()
  {

    if(this.registerForm.valid)
    {

      this.isLoading=true;


      this.authService.sendRegisterToApi(this.registerForm.value).subscribe(
      {
        next:(res)=>{

          console.log(res);


          if(res.message=='success')
          {
            //token
            localStorage.setItem('userToken',res.token);

            //navigate to login 

            this.router.navigate(['/login']);


          }

          this.isLoading=false;


        },

        error:(err)=>{
          console.log(err);

          this.errorMessage=err.error.message;

          this.isLoading=false;
        }
      })
    }
    
  }

}
