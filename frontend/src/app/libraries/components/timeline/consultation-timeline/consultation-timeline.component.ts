import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';
import { Schedule } from 'src/app/libraries/models/schedule.model';
@Component({
  selector: 'as-consultation-timeline',
  templateUrl: './consultation-timeline.component.html',
  styleUrls: ['./consultation-timeline.component.scss'],
})
export class ConsultationTimelineComponent implements OnInit {
  @Input() public schedules: Schedule;

  @Output() clickItem: EventEmitter<Schedule> = new EventEmitter<Schedule>();

  constructor() {}

  ngOnInit(): void {}

  public groupBy({ item, index }: { item: Schedule; index: number }): number {
    return dayjs(item.data).startOf('day').unix();
  }

  public onClickItem(item: Schedule): void {
    this.clickItem.emit(item);
  }
}
