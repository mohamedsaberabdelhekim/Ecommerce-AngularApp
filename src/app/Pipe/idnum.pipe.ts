import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idnum'
})
export class IdnumPipe implements PipeTransform {

  transform(value: any): any {
    // return value.slice(0,4)+"-"+value.slice(4,8)+"-"+value.slice(8,12)+"-"+value.slice(12,16);
    if(value.slice(1,3)<20){
      return value.slice(3,5)+"/"+value.slice(5,7)+"/20"+value.slice(1,3)
    }


    else{
      return value.slice(3,5)+"/"+value.slice(5,7)+"/19"+value.slice(1,3)
  }
  }
  }
