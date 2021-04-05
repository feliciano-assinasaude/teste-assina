import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { Schedule } from 'src/app/libraries/models/schedule.model';
import { ApiService } from 'src/app/libraries/services/api.service';

@Component({
  selector: 'as-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();
  public schedule: Schedule;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.activatedRoute.paramMap
      .pipe(
        filter((paramMap) => paramMap.has('id')),
        switchMap((paramMap) => {
          return this.apiService.getOneSchedule(paramMap.get('id'));
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((schedule: Schedule) => {
        this.schedule = schedule;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onBack(): void {
    this.router.navigateByUrl('/consultas');
  }
}
