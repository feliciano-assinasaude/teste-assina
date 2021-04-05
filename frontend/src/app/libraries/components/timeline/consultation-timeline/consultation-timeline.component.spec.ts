import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTimelineComponent } from './consultation-timeline.component';

describe('ConsultationTimelineComponent', () => {
  let component: ConsultationTimelineComponent;
  let fixture: ComponentFixture<ConsultationTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
