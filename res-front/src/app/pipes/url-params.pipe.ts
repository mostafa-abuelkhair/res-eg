import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlParams'
})
export class UrlParamsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    const searchParams:any = new URLSearchParams(value.substring(value.indexOf('?')));

    return Object.fromEntries(searchParams)
  }

}
