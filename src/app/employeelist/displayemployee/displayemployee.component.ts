import { Employee } from './../employee.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  // Life cycle method which tracks the input values
  // Life cycle method - ngOnChanges()

  @Input()
  employee : Employee;

  hideDetails : boolean = true;

  // Programmatic Event of type EventEmitter class
  // Declaring an event of type Employee
  @Output()
  notifyEvent : EventEmitter<Employee> = new EventEmitter();

  constructor() {
    console.log("displayemployee is instantiated");
    this.employee = new Employee();
  }

  // is called immediately after constructor
  ngOnInit(): void {
    // this.raiseNotifyEvent();
  }

  // raise an event
  public raiseNotifyEvent(){

    // raise the programmatic event
    // attaching employee type object in event
    this.notifyEvent.emit(this.employee);
  }

  public toggleDetails() : void {
    if(this.hideDetails)
      this.hideDetails = false;
    else
      this.hideDetails = true;
  }


  /**
   *
   * Steps to pass data from child to parent :
   * 1. Create property of type EventEmitter<T> in the child class.
   * 2. Decorate this property with @Output.
   * 3. To raise the event -  write a function in the component class.
   *            this.<<event_name>>.emit(data)
   * 4. When the event will get raised in the child class
   *      <element (click) = "event handler to raise the event" />
   * 5. Binding of parent function which should be invoked as event handler, whenever the child
   *    component raise the event
   *      <child-component (event) = "parent-eventhandler(data) " > </child-component>
   */

}
