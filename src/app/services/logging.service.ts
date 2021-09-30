import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() {
    console.log("Logging service instantiated");
  }

  public info(message : string) : void {
    console.log(`Logger info - ${message}`);
  }
}
