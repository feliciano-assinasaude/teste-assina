import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CalendarDateComponent } from './calendar-date/calendar-date.component';
import { PipesModule } from '../../pipes/pipes.module';

import { CalendarTimeComponent } from './calendar-time/calendar-time.component';

const components = [CalendarDateComponent, CalendarTimeComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatIconModule, PipesModule],
  exports: [...components],
})
export class CalendarModule {}
