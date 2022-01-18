import { Component, OnInit } from '@angular/core';
import { Patient1 } from '../patient1';
import { PatientregistrationService } from '../service/patientregistration.service';

@Component({
  selector: 'app-formfilling',
  templateUrl: './formfilling.component.html',
  styleUrls: ['./formfilling.component.css']
})
export class FormfillingComponent implements OnInit {

  patient:Patient1=new Patient1 ();
  constructor(private patientservice:PatientregistrationService) { }

  ngOnInit(): void {
  }
  savepatient(){
    this.patientservice.createPatient(this.patient).subscribe(data=>
      {
        console.log(data)
      },
      error=>console.log(error));
  }
  onSubmit(){


  }

}
