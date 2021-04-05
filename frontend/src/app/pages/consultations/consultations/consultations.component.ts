import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Schedule } from 'src/app/libraries/models/schedule.model';
import { ApiService } from 'src/app/libraries/services/api.service';

@Component({
  selector: 'as-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss'],
})
export class ConsultationsComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  public schedules: Schedule[];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService
      .getSchedules()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((schedules) => {
        this.schedules = this.filterSchedules(schedules);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private filterSchedules(schedules: Schedule[]): Schedule[] {
    return schedules.filter((schedule) => {
      const transformedDate = dayjs(schedule.data).startOf('day');

      // @ts-ignore;
      return dayjs().subtract(1, 'day').isBefore(transformedDate);
    });
  }

  public onClick(): void {
    this.router.navigateByUrl('/consultas/agendamento');
  }

  public onClickItem(schedule: Schedule): void {
    this.router.navigateByUrl(`/consultas/agendamento/${schedule.id}`);
  }
}
