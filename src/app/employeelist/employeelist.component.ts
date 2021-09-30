import { LoggingService } from './../services/logging.service';
import { DisplayemployeeComponent } from './displayemployee/displayemployee.component';
import { Employee } from './employee.model';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees : any[];
  name : string;

  // By default @ViewChild access a single element with same template reference
  // @ViewChild("emp") emp : DisplayemployeeComponent = {} as DisplayemployeeComponent;

  @ViewChildren ("emp") emp : QueryList<DisplayemployeeComponent> = {} as QueryList<DisplayemployeeComponent>;

  constructor(private service : LoggingService) {
    console.log("employeelist is instantiated");
    this.name = "";
    this.employees = [
      {
        code : "emp101",
        name : "Tom",
        gender : "Male",
        annualSalary : 5500,
        dateOfBirth : "6/25/1988",
        photo : "/assets/images/Tom.jpg"
      },
      {
        code : "emp102",
        name : "Alex",
        gender : "Male",
        annualSalary : 9500,
        dateOfBirth : "1/15/1990",
        photo : "/assets/images/Alex.jpg"
      },
      {
        code : "emp103",
        name : "Candy",
        gender : "Female",
        annualSalary : 10500,
        dateOfBirth : "9/12/1989",
        photo : "/assets/images/Candy.jpg"
      },
      {
        code : "emp104",
        name : "Shaun",
        gender : "Male",
        annualSalary : 3500,
        dateOfBirth : "6/15/1988",
        photo : "/assets/images/Shaun.jpg"
      }
    ]
  }

  ngOnInit(): void {
  }

  getEmployees(): void{

    this.employees = [
      {
        code : "emp101",
        name : "Tom",
        gender : "Male",
        annualSalary : 5500,
        dateOfBirth : "25/6/1988"
      },
      {
        code : "emp102",
        name : "Alex",
        gender : "Male",
        annualSalary : 9500,
        dateOfBirth : "15/1/1990"
      },
      {
        code : "emp103",
        name : "Candy",
        gender : "Female",
        annualSalary : 10500,
        dateOfBirth : "12/9/1989"
      },
      {
        code : "emp104",
        name : "Shaun",
        gender : "Male",
        annualSalary : 3500,
        dateOfBirth : "15/6/1988"
      },
      {
        code : "emp105",
        name : "Nancy",
        gender : "Female",
        annualSalary : 7500,
        dateOfBirth : "9/2/1994"
      }
    ];
  }

  public trackByEmployeeCode(index: number, employee: any): string {
    return employee.code;
  }

  // Getting Employee type object in payload of event generating by display component (i.e. child component)
  public eventHandler(payloadOfEvent : Employee){
    console.log(payloadOfEvent);
    this.name = payloadOfEvent.name;
  }

  public parentToggleDetails() : void {
    // this.emp.toggleDetails();
    let empArray = this.emp.toArray();
    for (let i = 0; i < empArray.length; i++) {
      empArray[i].toggleDetails();
    }
  }

  public invokeLogger() : void {
    this.service.info(JSON.stringify(this.employees[0]));
  }
}
