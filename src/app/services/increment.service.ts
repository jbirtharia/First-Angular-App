import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementService {

  constructor() {
    console.log("Increment is intantiated");
  }

  public incrementer(num : number) : number {
    return ++num;
  }
}
