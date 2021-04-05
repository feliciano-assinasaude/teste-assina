import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ConsultationTimelineComponent } from './consultation-timeline/consultation-timeline.component';
import { CardsModule } from '../cards/cards.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [TimelineComponent, ConsultationTimelineComponent],
  imports: [CommonModule, CardsModule, PipesModule],
  exports: [TimelineComponent, ConsultationTimelineComponent],
})
export class TimelineModule {}
