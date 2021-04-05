import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputMaskDirective } from './input-mask/input-mask.directive';

@NgModule({
  declarations: [InputMaskDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputMaskDirective],
})
export class MasksModule {}
