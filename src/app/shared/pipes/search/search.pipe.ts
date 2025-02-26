import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProds:IProducts[],  searchTerm:string): IProducts[] {
    

    // for(let i = 0;i<allProds.length;i++){

    //   if(allProds[i].title.toLowerCase().includes(searchTerm.toLowerCase())){
    //     return [allProds[i]];
    //   }
    // }

   return allProds.filter((ele=>ele.title.toLowerCase().includes(searchTerm.toLowerCase())));
  }

}
