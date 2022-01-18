import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient1 } from '../patient1';

@Injectable({
  providedIn: 'root'
})
export class PatientregistrationService {
  private baseURL = "http://localhost:8080/api/v1/patients1";

  constructor(private httpClient: HttpClient) { }
  
  getPatientList(): Observable<Patient1[]>{
    return this.httpClient.get<Patient1[]>(`${this.baseURL}`);
  }

  createPatient(patient:Patient1): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, patient);
  }

  getPatientById(id: number): Observable<Patient1>{
    return this.httpClient.get<Patient1>(`${this.baseURL}/${id}`);
  }

  updatePatient(id: number, patient:Patient1): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, patient);
  }

  deletePatient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}