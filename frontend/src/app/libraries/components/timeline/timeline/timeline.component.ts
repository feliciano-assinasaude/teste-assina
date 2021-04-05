import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'as-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit, OnChanges {
  @Input() public items: any[];
  @Input() public groupBy: Function;

  public groupedItems: any;
  public groupedKeys: string[];

  @ContentChild('timelineKey') timelineKey: TemplateRef<any>;
  @ContentChild('timelineValues') timelineValues: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'] && changes['items'].currentValue) {
      this.groupedItems = this.group(changes['items'].currentValue);
      this.groupedKeys = Object.keys(this.groupedItems);
    }
  }

  private group(items: any): any {
    return items.reduce((acc: any, item: any, index: number) => {
      const key = this.groupBy({ item, index });

      if (key in acc) {
        acc[key].push(item);
      } else {
        acc[key] = [item];
      }

      return acc;
    }, {});
  }
}
