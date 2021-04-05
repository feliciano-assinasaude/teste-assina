import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'fromUnix',
})
export class FromUnixPipe implements PipeTransform {
  transform(value: number, ...args: any[]): Date {
    return dayjs.unix(value).toDate();
  }
}
