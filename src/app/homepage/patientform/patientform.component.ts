import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Patient } from 'src/app/patient';
import { PatientregistrationService } from 'src/app/service/patientregistration.service';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {
  patient:Patient=new Patient("","","",0)
  message:any;

  constructor(private service:PatientregistrationService) { }

  ngOnInit(): void {
  }
 

}
