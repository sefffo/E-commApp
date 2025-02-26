import { Component, inject } from '@angular/core';
import { RxjsTestService } from '../../../core/service/testRxjs/rxjs-test.service';
import { Subscription } from 'rxjs';
import { Ibrands } from '../../../shared/interfaces/brands';
import { BrandCardsComponent } from "../../../shared/brand-cards/brand-cards.component";

@Component({
  selector: 'app-brands',
  imports: [BrandCardsComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

    private rxjsTestService:RxjsTestService=inject(RxjsTestService);
    allSubscription:Subscription=new Subscription()
    allBrands:Ibrands[]=[];

  ngOnInit()
  {
    this.getAllBrands();
  }


  getAllBrands()
  {
    this.allSubscription=this.rxjsTestService.getBrandsWithShareReply()!.subscribe({

      next:(res)=>
        {
  
          this.allBrands=res.data;
          console.log(res.data);
        },
        error:(err)=>
        {
          console.log(err)
        }

    })
  }



  ngOnDestroy()
  {
    this.allSubscription.unsubscribe();
  }
}
