import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ss'
})
export class SsPipe implements PipeTransform {

  transform(price: any): any {

    return "ssbv";
  }

}
