import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/service/Ecomm/products/product.service';
import { IProducts } from '../../../shared/interfaces/products';
import { CartService } from '../../../core/service/Ecomm/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
private toastrService:ToastrService=inject(ToastrService)
private cartService:CartService=inject(CartService)
private productService:ProductService=inject(ProductService)
private activatedRoute:ActivatedRoute=inject(ActivatedRoute)

pId:string|null='';
pInfo!:IProducts
ngOnInit():void
{

                //params btrg3 observable
  this.activatedRoute.paramMap.subscribe( (p)=>{

                  //bts7b mn el url foo2 el id bta3 el product el 3aiz a5osh 3 el details bta3to


    this . pId=p.get('id');//el var el 3mlto fe el routes
    this.productService.getSpecificProduct(this.pId).subscribe({

      next:(res)=>{

        console.log(res.data);

        this.pInfo=res.data;
      },
      error:(err)=>{

        console.log(err);
      }

    })



  })
}

addToCart(pId:string)
{
  this.cartService.addToCartApi(pId).subscribe({

    next:(res)=>{



      this.toastrService.success(res.message,'Success');

      console.log(res);
    }

  });
}

}
