import { IncrementService } from './../services/increment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [IncrementService]     // Injected service
})
export class CounterComponent implements OnInit {

  count : number = 0;

  constructor(private service : IncrementService) {
    console.log("Counter is instantiated")
  }

  ngOnInit(): void {
  }

  public incrementCounter() : void {
    this.count = this.service.incrementer(this.count);
  }

}
