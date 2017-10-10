import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brackets'
})
export class BracketsPipe implements PipeTransform {

  transform(value: any, newcase:string='d'): any {
    if(newcase === 'u'){
      value= value.toUpperCase();
    }else if(newcase == 'l'){
      value= value.toLowerCase();
    }else{
      value= value;
    }
    return '['+value+']';
  }

}
