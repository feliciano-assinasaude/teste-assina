import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { defaultTimeMask } from 'src/app/libraries/masks/input-mask/time-mask';
import { Calendar } from 'src/app/libraries/models/components/calendar/calendar.model';
import { Doctor } from 'src/app/libraries/models/doctor.model';
import { Mask } from 'src/app/libraries/models/mask.model';
import { Schedule } from 'src/app/libraries/models/schedule.model';
import { Specialty } from 'src/app/libraries/models/specialty';
import { ApiService } from 'src/app/libraries/services/api.service';

@Component({
  selector: 'as-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss'],
})
export class CreateScheduleComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  public specialties: Specialty[];
  public doctors: Doctor[];

  public calendarParams: Calendar = {
    enterInDays: true,
    enterInMonths: true,
    selectedDate: dayjs(),
    showDays: true,
    showDiffDays: true,
    hasFooter: false,
    events: [],
  };

  public form: FormGroup;
  public timeMask: Mask = defaultTimeMask;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      specialty: [],
      doctor: [null, Validators.required],
      hour: ['', [Validators.required]],
    });

    this.apiService
      .getSpecialties()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((specialties) => {
        this.specialties = specialties;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onSelectSpecialty(specialtyId: number): void {
    this.apiService
      .getDoctorBySpecialty(specialtyId)
      .pipe(take(1))
      .subscribe((doctors: Doctor[]) => {
        this.doctors = doctors;
      });
  }

  public onSelectDay(date: dayjs.Dayjs): void {
    this.calendarParams.selectedDate = date;
  }

  public onSchedule(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.form.get('hour').value.length < 4) {
      return;
    }

    const hour = this.form.get('hour').value.substring(0, 4);

    const date = `${this.calendarParams.selectedDate.format(
      'YYYY-MM-DD'
    )} ${hour}:00`;

    this.apiService
      .createSchedule({
        data: date,
        medico_id: this.form.get('doctor').value,
      })
      .pipe(take(1))
      .subscribe((scheduleId: number) => {
        this.router.navigateByUrl(`/consultas/agendamento/${scheduleId}`);
      });
  }
}
