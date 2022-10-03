import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

  transform(value: string, suffix: string, count: number = 3): unknown {
    return value + suffix.repeat(count);
  }

}
