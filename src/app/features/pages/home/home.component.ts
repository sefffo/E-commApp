import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/service/Ecomm/products/product.service';
import { get } from 'http';
import { IProducts } from '../../../shared/interfaces/products';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RxjsTestService } from '../../../core/service/testRxjs/rxjs-test.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent,CarouselModule,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



  customOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
nav:true
}


  userWord:string=""
  allProducts:IProducts[]=[]

  allSubscription:Subscription=new Subscription()
  private productService:ProductService=inject(ProductService);


  private rxjsTestService:RxjsTestService=inject(RxjsTestService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 9
      }
    },
    nav: true
  }



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
