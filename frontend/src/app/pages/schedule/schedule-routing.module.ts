import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';

import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: CreateScheduleComponent },
  { path: ':id', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
