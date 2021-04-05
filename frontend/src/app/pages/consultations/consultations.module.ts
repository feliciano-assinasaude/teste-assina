import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './consultations/consultations.component';
import { CardsModule } from 'src/app/libraries/components/cards/cards.module';
import { TimelineModule } from 'src/app/libraries/components/timeline/timeline.module';
import { ApiService } from 'src/app/libraries/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from 'src/app/libraries/components/navigation/navigation.module';

@NgModule({
  declarations: [ConsultationsComponent],
  imports: [
    CommonModule,
    ConsultationsRoutingModule,
    CardsModule,
    HttpClientModule,
    TimelineModule,
    NavigationModule,
  ],
  providers: [ApiService],
})
export class ConsultationsModule {}
