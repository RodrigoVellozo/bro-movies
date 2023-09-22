import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'imageNotFound'
})
export class ImageNotFoundPipe implements PipeTransform {

  transform(value: string): string {
    if(value == 'N/A'){
      return 'assets/img/notFound.jpg';
    }
    return value;
  }

}