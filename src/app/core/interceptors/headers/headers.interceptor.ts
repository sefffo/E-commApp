import { HttpInterceptorFn } from '@angular/common/http';


export const headersInterceptor: HttpInterceptorFn = (req, next) => {

  let userHeaders:any={ token: localStorage.getItem('userToken')}

  req=req.clone({
    setHeaders: userHeaders
  })

  return next(req);
};
