import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'dayjs',
})
export class DayjsPipe implements PipeTransform {
  transform(date: Date, ...args: any[]): string {
    if (args && args.length > 0) {
      return dayjs(date).format(args[0]);
    }

    return date.toString();
  }
}
