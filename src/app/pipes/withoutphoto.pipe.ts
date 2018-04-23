import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutphoto'
})
export class WithoutphotoPipe implements PipeTransform {

  transform(value: any): any {


    if(!value){
      return "assets/img/noimage.png"
    }

    return (value.length > 0 )? value[1].url : "assets/img/noimage.png";
  }

}
