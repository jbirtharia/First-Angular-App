import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  templateUrl: './testngfor.component.html',
  styleUrls: ['./testngfor.component.css']
})
export class TestngforComponent implements OnInit {

  name : string = "Sachin Tendulkar";

  personArray = [
    {
      id: 101,
      name: "Sachin Tendulkar",
      age: 38,
      address: "Pune"
    },
    {
      id: 102,
      name: "MS Dhoni",
      age: 27,
      address: "Pune"
    },
    {
      id: 103,
      name: "Rohit Sharma",
      age: 34,
      address: "Mumbai"
    }
  ]

  constructor() {
    console.log("testngfor componenet is instantiated")
  }

  ngOnInit(): void {
  }

}
