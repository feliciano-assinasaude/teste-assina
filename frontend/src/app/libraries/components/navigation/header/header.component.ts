import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() textAlign: string;
  @Input() borderRadius: string;
  @Input() theme: string = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
