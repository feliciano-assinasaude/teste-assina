import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { CalendarModule } from 'src/app/libraries/components/calendar/calendar.module';
import { NavigationModule } from 'src/app/libraries/components/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MasksModule } from 'src/app/libraries/masks/masks.module';
import { PipesModule } from 'src/app/libraries/pipes/pipes.module';

@NgModule({
  declarations: [ScheduleComponent, CreateScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    CalendarModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    PipesModule,
    MasksModule,
  ],
})
export class ScheduleModule {}
