import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
})
export class IconsModule {
  private readonly symbolsURL: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.symbolsURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      `assets/symbols.svg`
    );

    this.matIconRegistry.addSvgIconSetInNamespace('symbols', this.symbolsURL);
  }
}
