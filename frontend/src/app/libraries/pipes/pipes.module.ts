import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayjsPipe } from './dayjs/dayjs.pipe';
import { FromUnixPipe } from './fromUnix/from-unix.pipe';
import { IsTodayPipe } from './dayjs/is-today.pipe';

@NgModule({
  declarations: [DayjsPipe, FromUnixPipe, IsTodayPipe],
  imports: [CommonModule],
  exports: [DayjsPipe, FromUnixPipe, IsTodayPipe],
})
export class PipesModule {}
