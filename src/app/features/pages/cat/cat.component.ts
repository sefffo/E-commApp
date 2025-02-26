import { Component, inject } from '@angular/core';
import { RxjsTestService } from '../../../core/service/testRxjs/rxjs-test.service';
import { Subscription } from 'rxjs';
import { Ibrands } from '../../../shared/interfaces/brands';
import { CatCardsComponent } from '../../../shared/components/cat-cards/cat-cards.component';

@Component({
  selector: 'app-cat',
  imports: [CatCardsComponent],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss'
})
export class CatComponent {



      private rxjsTestService:RxjsTestService=inject(RxjsTestService);
      allSubscription:Subscription=new Subscription()
      allCats:Ibrands[]=[];
  
    ngOnInit()
    {
      this.getALLCats();
    }
  
  
    getALLCats()
    {
      this.allSubscription=this.rxjsTestService.getCatsWithShareReply()!.subscribe({
  
        next:(res)=>
          {
    
            this.allCats=res.data;
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
