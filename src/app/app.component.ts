import { Component } from "@angular/core";

@Component({
  selector: 'root',  // acts like a tag to the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']          // represnts the view - UI
})
export class AppComponent {

  constructor(){
    console.log("AppComponent is instantiated...")
  }
}


// mandatory attribute of component :
// 1. selector // If selector value is root, then it should have instantiated first.
// 2. template
