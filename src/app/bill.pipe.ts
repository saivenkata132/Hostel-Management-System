import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bill'
})
export class BillPipe implements PipeTransform {

  transform(price: any): any {

    if(price=='Rs 7500')
    return '3 share';
    
  }

}
