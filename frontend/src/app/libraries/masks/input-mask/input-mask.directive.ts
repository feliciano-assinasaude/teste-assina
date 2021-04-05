import {
  Directive,
  OnDestroy,
  ElementRef,
  Input,
  OnInit,
  Inject,
  PLATFORM_ID,
  OnChanges,
  SimpleChanges,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup } from '@angular/forms';

import * as textMask from 'vanilla-text-mask';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Mask } from '../../models/mask.model';
export interface MaskConfig extends Mask {
  inputElement: HTMLInputElement;
}

@Directive({
  selector: '[asInputMask]',
})
export class InputMaskDirective implements OnDestroy, OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  private maskedInputController: any;
  private isBrowser: boolean;

  private maskedInputConfig: MaskConfig;

  @Input() public asInputMask: Mask;
  @Input() public parentForm: FormGroup;
  @Input() public formControlName: string;
  @Input() public isDate: boolean;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const nativeInput: HTMLInputElement = this.elementRef.nativeElement;

      this.maskedInputConfig = {
        inputElement: nativeInput,
        ...this.asInputMask,
      };

      this.maskedInputController = textMask.maskInput(this.maskedInputConfig);

      if (this.parentForm && this.formControlName) {
        nativeInput.addEventListener('keyup', () => {
          this.parentForm.updateValueAndValidity();
        });
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.maskedInputController) {
      this.maskedInputController.destroy();
    }
  }
}
