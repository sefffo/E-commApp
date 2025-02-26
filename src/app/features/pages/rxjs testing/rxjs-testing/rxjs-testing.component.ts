import { Component, inject } from '@angular/core';
import { RxjsTestService } from '../../../../core/service/testRxjs/rxjs-test.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-testing',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-testing.component.html',
  styleUrl: './rxjs-testing.component.scss'
})
export class RxjsTestingComponent {

private rxjsTestService:RxjsTestService=inject(RxjsTestService);


pPrice:FormControl=new FormControl();
ngOnInit(): void { 

  this.pPrice.valueChanges.pipe(debounceTime(1000),distinctUntilChanged(),
  switchMap(query=>this.rxjsTestService.getProdsWithPrice(query))
).subscribe({
    next:(res)=>{
      console.log(res);
      
    },
    error:(err)=>{
      console.log(err);
    }
})



}

}
