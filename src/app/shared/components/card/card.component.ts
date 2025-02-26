import { Component, inject, Input, SimpleChange } from '@angular/core';
import { ProductService } from '../../../core/service/Ecomm/products/product.service';
import { IProducts } from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/service/Ecomm/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  private toastrService:ToastrService=inject(ToastrService);
  private cartService:CartService=inject(CartService);

  private productService:ProductService=inject(ProductService);

  @Input() CardProduct!:IProducts;


  addToCart(pId:string)
  {
   
    
    
    this.cartService.addToCartApi(pId).subscribe({
      next:(res)=>{
        console.log(res); 
        this.toastrService.success(res.message,'Success');
      },
      error:(err)=>{
        console.log(err); 
      }


    })
  }


  

}
