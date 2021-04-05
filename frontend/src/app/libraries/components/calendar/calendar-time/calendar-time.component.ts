import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'as-calendar-time',
  templateUrl: './calendar-time.component.html',
  styleUrls: ['./calendar-time.component.scss']
})
export class CalendarTimeComponent implements OnInit, OnChanges {

  @Input() numberOfTimes: number = 3;
  @Input() availableTimes: number[] = [];

  @Output() selectTime: EventEmitter<any> = new EventEmitter();

  public index: number = 0;
  public displayedTimes: number[];
  public selectedTime: number;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['availableTimes']) {
      this.updateArray();
    }
  }

  public addIndex(): void {
    if (this.index < this.availableTimes.length - this.numberOfTimes ){
      this.index++;
      this.updateArray();
    }
  }

  public removeIndex(): void {
    if (this.index > 0) {
      this.index--;
      this.updateArray();
    }
  }

  public updateArray(): void {
    if (this.availableTimes && this.availableTimes.length > 0) {

      const times = this.availableTimes;
      this.displayedTimes = times.slice(this.index, this.numberOfTimes + this.index);
    }
  }

  public onSelectTime(time: number): void {
    this.selectedTime = time;
    this.selectTime.emit(time);
  }

}
