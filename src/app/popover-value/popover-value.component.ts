import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-value',
  templateUrl: './popover-value.component.html',
  styleUrls: ['./popover-value.component.scss']
})
export class PopoverValueComponent implements OnInit {

  @Input()
  auction: any;

  constructor() {
  }

  ngOnInit() {
  }

}
