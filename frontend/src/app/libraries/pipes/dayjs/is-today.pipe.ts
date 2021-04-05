import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'isToday',
})
export class IsTodayPipe implements PipeTransform {
  transform(value: dayjs.Dayjs, ...args: unknown[]): boolean {
    const today = dayjs().startOf('day');
    const date = dayjs(value).startOf('day');

    return today.isSame(date);
  }
}
