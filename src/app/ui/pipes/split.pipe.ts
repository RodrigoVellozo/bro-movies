import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string): Array<string> {
    if (value) {
      const split = value.split(',').map(item => item.trim());
      return split;
    }
    return [];
  }

}
