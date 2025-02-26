import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    let spinner: NgxSpinnerService=inject(NgxSpinnerService);
  
   /** spinner starts on init */
   spinner.show();


  return next(req).pipe(finalize(()=>{
      /** spinner ends after 5 seconds */
      spinner.hide();
  }));


};
