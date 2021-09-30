import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Provide the service ar root level
@Injectable({
  providedIn: 'root'            // providers:[DataService]
})
export class DataService {

  private baseURL = "http://localhost:8080/customer-application/demo";

  constructor(private httpClient : HttpClient) {
    console.log("Data service is instantiated")
  }

  public getCustomers(){

  }

}
