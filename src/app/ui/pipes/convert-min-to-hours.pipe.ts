import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'convertMinToHours'
})
export class ConvertMinToHoursPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let time =parseInt(value.split(' ')[0]);
    if (time) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      return `${hours}h ${minutes} min`;
    }
    return null;
  }

}
