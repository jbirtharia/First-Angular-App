import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // Model or properties or data
  title : string = "Message Component";
  message : string = "";
  person = {
    id: 100,
    name: "Jacky Birtharia",
    age: 27,
    address: null
  }
  personArray = [
    {id: 101,
      name: "Sachin Tendulkar",
      age: 38,
      address: "Pune"},
    {id: 102,
      name: "MS Dhoni",
      age: 27,
      address: "Pune"}
  ]

  isDisabled : boolean = false;

  constructor() { 
    console.log("MessageComponent instantiated");
    console.log("title - ", this.title);
  }

  ngOnInit(): void {
    console.log("MessageComponent init");
  }

  // Event handler
  public getMessage(){
    this.message = "increased size";
  }
}
