import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Schedule } from 'src/app/libraries/models/schedule.model';

@Component({
  selector: 'as-consultation-card',
  templateUrl: './consultation-card.component.html',
  styleUrls: ['./consultation-card.component.scss'],
})
export class ConsultationCardComponent implements OnInit {
  @Input() public schedule: Schedule;

  public active: boolean;

  constructor() {}

  ngOnInit(): void {
    const today = dayjs().startOf('day');
    const date = dayjs(this.schedule.data).startOf('day');

    if (today.isSame(date)) {
      this.active = true;
    }
  }
}
