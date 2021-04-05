import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CalendarDateComponent} from './calendar-date.component';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {MatIcon} from '@angular/material/icon';
import {By} from '@angular/platform-browser';

import * as dayjs from 'dayjs';;

dayjs.locale('pt-br');
describe('CalendarDateComponent', () => {
  let component: CalendarDateComponent;
  let fixture: ComponentFixture<CalendarDateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatIconTestingModule],
      declarations: [CalendarDateComponent, MatIcon]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateComponent);
    component = fixture.componentInstance;
    component.showDays = true;
    component.events = {};
    component.events[Moment.utc().startOf('day').unix()] = [
      {
        event: 'testEvent',
        theme: 'primary'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create days', () => {
    const spy = spyOn(component, 'createCalendar').and.callThrough();
    const spyLengthDays = spyOn(component, 'getLengthOfDays');

    const firstDayInMonth = component.selectedDate.startOf('month').day();
    const lastDayInMonth = component.selectedDate.endOf('month').day();

    const days = Array(
      component.getLengthOfDays(firstDayInMonth, lastDayInMonth)
    )
      .fill(null)
      .map((day, index) => {
        if (index < firstDayInMonth) {
          const initDate = component.selectedDate.clone().startOf('month').subtract(firstDayInMonth, 'day');
          return initDate.add(index, 'day');
        }

        return component.selectedDate
          .clone()
          .date(index - firstDayInMonth + 1)
          .startOf('day');
      });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(spyLengthDays).toHaveBeenCalled();
    expect(component.days).toEqual(days);
  });

  it('should prev month', () => {
    const actionPrev = fixture.debugElement.queryAll(By.css('.c-calendar__header-action'));
    const spy = spyOn(component, 'prevMonth').and.callThrough();

    actionPrev[0].nativeElement.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should next month', () => {
    const actionNext = fixture.debugElement.queryAll(By.css('.c-calendar__header-action'));
    const spy = spyOn(component, 'nextMonth').and.callThrough();

    actionNext[1].nativeElement.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should select month', () => {
    const title = fixture.debugElement.query(By.css('.c-calendar__header-title'));
    const spy = spyOn(component, 'onSelectMonth').and.callThrough();

    title.nativeElement.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should have title', () => {
    const title = fixture.debugElement.query(By.css('.c-calendar__header-title'));
    const text = component.selectedDate.format('MMMM') + ' DE ' + component.selectedDate.format('YYYY');

    expect(title.nativeElement.innerText).toEqual(text.toUpperCase());
  });

  it('should have correct quantity of labels', () => {
    const labels = fixture.debugElement.queryAll(By.css('.c-calendar__weekday'));

    expect(labels.length).toEqual(component.labels.length);
  });

  it('should have correct labels', () => {
    const labels = fixture.debugElement.queryAll(By.css('.c-calendar__weekday'));

    labels.forEach((label, i) => {
      expect(label.nativeElement.innerText).toEqual(component.labels[i].substring(0, 1).toUpperCase());
    });
  });

  it('should have correct quantity of days', () => {
    const days = fixture.debugElement.queryAll(By.css('.c-calendar__day'));

    expect(days.length).toEqual(component.days.length);
  });

  it('should click days', () => {
    const days = fixture.debugElement.queryAll(By.css('.c-calendar__day'));
    const spy = spyOn(component, 'onClickDay');

    days[0].nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

});
