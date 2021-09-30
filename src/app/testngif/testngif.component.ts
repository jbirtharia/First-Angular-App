import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-testngif',
  templateUrl: './testngif.component.html',
  styleUrls: ['./testngif.component.css']
})
export class TestngifComponent implements OnInit {

  show: boolean = true;
  isBold: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() : void {
    this.show = !(this.show);
  }

  addStyle() : Object{
    let returnStyle = {
      'font-weight':'bold',
      'font-size.px': 30,
      'font-style':'italic'
    };
    return returnStyle;
  }
}
