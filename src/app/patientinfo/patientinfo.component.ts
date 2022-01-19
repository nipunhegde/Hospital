import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient1 } from '../patient1';
import { PatientregistrationService } from '../service/patientregistration.service';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent implements OnInit {

  
  patient: Patient1[]
  router: any;
  constructor(private route: ActivatedRoute, private patientregistrationservice:  PatientregistrationService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    this.patientregistrationservice.getPatientList().subscribe(data => {
      this.patient = data;
    });
  }

 
}