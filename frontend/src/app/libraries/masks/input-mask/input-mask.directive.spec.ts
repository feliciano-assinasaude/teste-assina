import { InputMaskDirective } from './input-mask.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Component } from '@angular/core';

// test mask
import { defaultCepMask } from './cep-mask';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'ljc-input-test',
  template: `
    <input [ljcInputMask]="cep" />
  `,
})
class InputTestComponent {
  public cep = defaultCepMask;
}

describe('InputMaskDirective', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTestComponent, InputMaskDirective],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveElement = fixture.debugElement.query(By.directive(InputMaskDirective));
    const directiveInstance = directiveElement.injector.get(InputMaskDirective);

    expect(directiveElement).toBeTruthy();
    expect(directiveInstance).toBeTruthy();
  });
});
