import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let spaces = 0;
    if (args){
      spaces = parseInt(args);
    }
    let reversed = '';
    for (let i=value.length-1;i>=0;i--){
      reversed += value.substring(i, i+1);
      reversed += Array(spaces + 1).join(' ');
    }
    return reversed;
  }

}
