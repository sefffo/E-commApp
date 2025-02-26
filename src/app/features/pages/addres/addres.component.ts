import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../core/service/Ecomm/All Orders/orders.service';

@Component({
  selector: 'app-addres',
  imports: [ReactiveFormsModule],
  templateUrl: './addres.component.html',
  styleUrl: './addres.component.scss'
})
export class AddresComponent {


  private ordersService:OrdersService=inject(OrdersService)

  cartId:string='';

  private activatedRoute:ActivatedRoute=inject(ActivatedRoute)

  addressForm:FormGroup=new FormGroup({

    details: new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.minLength(3),]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3),]),
  })  
  


  addressSubmit()
  {
    this.activatedRoute.paramMap.subscribe((p)=>{
      this.cartId=p.get('cartId')!;//! eshan 3omro ma hyrg3 null

      this.ordersService.checkOut(this.cartId,this.addressForm.value).subscribe({

        next:
        (res)=>
        {
         console.log("done");

          window.location.href=res.session.url //! 3shan asfoo 3 strip w ydf3 f ast5dmt window.location
        },

        error:
        (err)=>
        {
          console.log(err);
        }
      })
    })
    


   console.log(this.addressForm.value);
  }
}
