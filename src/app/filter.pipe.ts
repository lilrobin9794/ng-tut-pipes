import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((v: string) => v.match("^.*" + args[0] + ".*$"));
  }

}
