import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationsComponent } from './consultations/consultations.component';

const routes: Routes = [{ path: '', component: ConsultationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
