import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import 'dayjs/locale/pt-br';
import * as dayjs from 'dayjs';

dayjs.locale('pt-br');
@Component({
  selector: 'as-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss'],
})
export class CalendarDateComponent implements OnInit {
  @Input() public selectedDate: dayjs.Dayjs;
  @Input() public itemsToEvents: any[];
  @Input() public eventsCallback: Function;
  @Input() public showDays: boolean = true;
  @Input() public showDiffDays: boolean = true;
  @Output()
  public selectDay: EventEmitter<dayjs.Dayjs> = new EventEmitter<dayjs.Dayjs>();

  @Output()
  public changeMonth: EventEmitter<dayjs.Dayjs> = new EventEmitter<dayjs.Dayjs>();
  @Output()
  public selectMonth: EventEmitter<dayjs.Dayjs> = new EventEmitter<dayjs.Dayjs>();

  public days: dayjs.Dayjs[];
  public dayjs = dayjs;

  public backDisabled: boolean = true;

  public labels: string[] = Array(7)
    .fill(null)
    .map((v, index) => dayjs().startOf('week').add(index, 'day').format('ddd'));

  constructor() {}

  ngOnInit(): void {
    if (!this.selectedDate) {
      this.selectedDate = dayjs();
    }

    this.selectedDate = dayjs(this.selectedDate);

    if (this.showDays) {
      this.createCalendar();
    }
  }

  public createCalendar(): void {
    const firstDayInMonth = this.selectedDate.clone().startOf('month').day();
    const lastDayInMonth = this.selectedDate.clone().endOf('month').day();

    this.days = Array(this.getLengthOfDays(firstDayInMonth, lastDayInMonth))
      .fill(null)
      .map((_, index) => {
        if (index < firstDayInMonth) {
          const initialDate = this.selectedDate
            .clone()
            .startOf('month')
            .subtract(firstDayInMonth, 'day');

          return initialDate.add(index, 'day').startOf('day');
        }

        return this.selectedDate
          .clone()
          .date(index - firstDayInMonth + 1)
          .startOf('day');
      });
  }

  public getLengthOfDays(
    firstDayInMonth: number,
    lastDayInMonth: number
  ): number {
    const withInitialDays =
      this.selectedDate.clone().endOf('month').date() + firstDayInMonth;
    return withInitialDays + (6 - lastDayInMonth);
  }

  public onClickDay(day: dayjs.Dayjs): void {
    if (day) {
      this.selectDay.emit(day);
      this.selectedDate = day;
    }
  }

  public onSelectMonth(): void {
    this.selectMonth.emit(this.selectedDate);
  }

  public nextMonth(): void {
    this.backDisabled = false;
    this.selectedDate = this.selectedDate.add(1, 'month');
    this.changeMonth.emit(this.selectedDate);
    this.createCalendar();
  }

  public prevMonth(): void {
    const today = dayjs();

    if (today.month() === this.selectedDate.subtract(1, 'month').month()) {
      this.backDisabled = true;
    }

    if (today.month() === this.selectedDate.month()) {
      return;
    }

    this.selectedDate = this.selectedDate.subtract(1, 'month');
    this.changeMonth.emit(this.selectedDate);
    this.createCalendar();
  }
}
