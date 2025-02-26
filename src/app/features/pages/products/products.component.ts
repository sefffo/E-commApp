import { Component, inject } from '@angular/core';
import { IProducts } from '../../../shared/interfaces/products';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../core/service/Ecomm/products/product.service';
import { RxjsTestService } from '../../../core/service/testRxjs/rxjs-test.service';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-products',
  imports: [SearchPipe,FormsModule,CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  
  
  
    userWord:string=""
    allProducts:IProducts[]=[]
  
    allSubscription:Subscription=new Subscription()
    private productService:ProductService=inject(ProductService);
  
  
    private rxjsTestService:RxjsTestService=inject(RxjsTestService);
  
    
  
  
  
    // -------------------------------------------22222
  
    // images = [
    //   { id: '1', src: '/images/slider-image-1.jpeg', alt: 'Image 1' },
    //   { id: '2', src: '/images/slider-image-2.jpeg', alt: 'Image 2' },
    //   { id: '3', src: '/images/slider-image-3.jpeg', alt: 'Image 3' }
    // ];
  
  
  
    // customoptions: OwlOptions = {
    //   loop: true,
    //   margin: 0,
    //   nav: true,
    //   dots: true,
    //   autoplay: true,
    //   autoplayTimeout: 3000,
    //   autoplayHoverPause: true,
    //   responsive: {
    //     0: { items: 1 }
    //   }
    // };
  
  
  
  
    ngOnInit(): void {
  
  
      this.getAllproductsHome();
      
    }
  
  
    getAllproductsHome()
    {
      this.allSubscription=this.rxjsTestService.getProdsWithShareReply()!.subscribe({
  
        next:(res)=>
        {
  
          this.allProducts=res.data;
          console.log(res.data)
        },
        error:(err)=>
        {
          console.log(err)
        }
      })
  
    }
  
  
    ngOnDestroy():void
    {
  
      this.allSubscription.unsubscribe();
    }
  

}
