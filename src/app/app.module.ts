import { LoggingService } from './services/logging.service';
import { FormsModule } from '@angular/forms';
// Followings are called decorators. @NgModule is class level decorator.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { TestngforComponent } from './testngfor/testngfor.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { TestngifComponent } from './testngif/testngif.component';
import { DisplayemployeeComponent } from './employeelist/displayemployee/displayemployee.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from "@angular/common/http";

// First Angular will load AppModule. It will get path of AppModule from main.ts file.
// we use export keyword so it will be avialble to all files. like public.
// All variables and class written in ts files available to local file only.
@NgModule({
  declarations: [AppComponent, LoginComponent, MessageComponent, TestngforComponent, EmployeelistComponent, TestngifComponent, DisplayemployeeComponent, CounterComponent], // register the components
  imports: [BrowserModule, FormsModule, HttpClientModule],  // child module
  providers: [LoggingService],  // Since Logging service is defined here, so Logging service is now available globally.
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    console.log("Module is instantiated...")
  }


}

// Modules are concptually Containers.
// To define a class as Module, add @NgModule. We must add atleast one child module i.e. BrowserModule.
// BrowserModule - indicates that your application will be rebdered inside the browser and it provides
//                  all basic structure required by the applications.
