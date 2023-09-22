import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'assertDate'
})
export class AssertDatePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 5) {
      const stringFormatada = value.replace('–','');
      console.log(stringFormatada);
      return stringFormatada;
    }
    return value;
  }

}
