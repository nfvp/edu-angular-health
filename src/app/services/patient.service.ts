import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl: string = "http://localhost:8080/patients";  

  constructor(private httpClient: HttpClient) { }

  getPatientList() {
    return this.httpClient.get(this.baseUrl);
  }

}