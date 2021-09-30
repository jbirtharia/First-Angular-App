import { LoggingService } from './../services/logging.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  val: string = "";
  name: string = "";

  service : LoggingService;

  // @ViewChild is used to access the HTML elements inside the component class.
  // You can query thetemplate using the @ViewChild.
  // nameText - is a template reference variable declared in the template.
  @ViewChild('nameText')
  inputElement : ElementRef = {} as ElementRef;

  // constructor(private service : LoggingService) {
  //   console.log("Login componenet instantiated");
  //  }

   constructor(s : LoggingService) {
    console.log("Login componenet instantiated");
    this.service = s;
   }

  ngOnInit(): void {
  }

  public clickEventHandler(x : HTMLInputElement) : void{
    console.log(x);
    x.value = "Value changed through ref";
  }

  public ngAfterViewInit() : void{
    this.inputElement.nativeElement.focus();
  }

  public invokeLogger(event : any) : void{
    this.service.info(this.val);
  }

}
