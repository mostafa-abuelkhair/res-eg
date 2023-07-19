import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlRoute'
})
export class UrlRoutePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    return value.split('?')[0];

  }

}
