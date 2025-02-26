import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../core/service/auth/auth.service';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  

  errorMessage:string='';
  isLoading:boolean=false;
  private authService:AuthServiceService=inject(AuthServiceService);
  private router=inject(Router);


    LoginForm:FormGroup=new FormGroup({
      //validators ====> sho8l angular
      email: new FormControl(null ,  [Validators.required , Validators.email]),
      password: new FormControl(  null , [ Validators.required , Validators.pattern (/^[A-Z][a-zA-Z0-9]{6,10}$/)]), 
  
    })//enta hena bt7ot el custome validation bta3k
  
  


    LoginSubmit()
    {
      //tzbit shkl el spinner 3shan yfhm en ray7 aklem al API
      this.isLoading=true;
      //validation first
      //call the api and work
      if(this.LoginForm.valid)
      {
        this.authService.sendLoginToApi(this.LoginForm.value).subscribe({
          next:(res)=>{

            console.log(res);   //lazm trkz fe aeeh el form el maktob beha el res 3shan tst5mha 
      
            
            this.isLoading=false; //3shan aw2f el loading 

            if(res.message === 'success')
            {
              
              
              localStorage.setItem('userToken', res.token);
              //ha5od mn el service el data b3d el decoding
              this.authService.saveData();
              //hroo7 3l home
              this.router.navigate(['/home']);
            }
  
            //eh el hy7sl b3d ma n3ml login sa7
            

            //ana atbdnt
            
           
          },
          error:(err)=>{
            this.errorMessage=err.error.message
            this.isLoading=false;
          }
        })
      }
    }
  




}
