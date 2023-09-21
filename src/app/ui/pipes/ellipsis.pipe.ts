import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const maxLength = 18;
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }
    return value;
  }

}
