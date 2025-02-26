import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/service/Ecomm/cart/cart.service';
import { Observable } from 'rxjs';
import { IProducts } from '../../../shared/interfaces/products';
import { ICartProduct } from '../../../shared/interfaces/cart';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {


  cartId:string=""; 


  totalPrice:number=0;

  cartProducts:ICartProduct[]=[];
  private cartService:CartService=inject(CartService);
  private toastrService:ToastrService=inject(ToastrService);
  ngOnInit(): void {

    this.getMyCart();
    
   }


   getMyCart()
   {
    this.cartService.getCartApi().subscribe({
      next:
      (res)=>
      {

        this.cartProducts=res.data.products;
        this.totalPrice=res.data.totalCartPrice;
        console.log(res.data.products);
        this.cartId=res.cartId;
      },
      error:
      (err)=>{
        console.log(err);
      }
    });

   }


   removeFromCart(pId:string)
   {  

    this.cartService.removeCartApi(pId).subscribe({

      next:
      (res)=>
      {

        if(res.status=="success")
        {
          this.toastrService.success("item removed from your cart","removed item");
          this.getMyCart();

        }
      },
      error:
      (err)=>{
        console.log(err);
      }


    })

  }
  changeCount(pId:string,pCount:number){

    if(pCount<=0)
    {
      this.removeFromCart(pId);
      return;
    }



    this.cartService.updateCartApi(pId,pCount).subscribe({

      next:(res)=>
      {

        this.toastrService.success("item count updated","Cart Opreation");
        this.getMyCart();
        console.log(res);

      },
      error:(err)=>
      {
        console.log(err);
      }

        
      

    })
  }


  clearCart()
  {
    this.cartService.clearCartApi().subscribe({

      next:(res)=>{
        console.log(res);
        this.getMyCart();

        this.toastrService.success("Cart is Cleared","Cart Opreation");
      },
      error:(err)=>{
        console.log(err);


      }

    })

  }
}
