import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/consultas',
  },
  {
    path: 'consultas',
    loadChildren: () =>
      import('./pages/consultations/consultations.module').then(
        (m) => m.ConsultationsModule
      ),
  },
  {
    path: 'consultas/agendamento',
    loadChildren: () =>
      import('./pages/schedule/schedule.module').then((m) => m.ScheduleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
