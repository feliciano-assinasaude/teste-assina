import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationCardComponent } from './consultation-card/consultation-card.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [ConsultationCardComponent],
  imports: [CommonModule, PipesModule],
  exports: [ConsultationCardComponent],
})
export class CardsModule {}
