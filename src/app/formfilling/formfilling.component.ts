import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient1 } from '../patient1';
import { PatientregistrationService } from '../service/patientregistration.service';

@Component({
  selector: 'app-formfilling',
  templateUrl: './formfilling.component.html',
  styleUrls: ['./formfilling.component.css']
})
export class FormfillingComponent implements OnInit {

  patient:Patient1=new Patient1 ();
  constructor(private patientservice:PatientregistrationService,
  private router: Router) { }

  ngOnInit(): void {
    
  }
 
  savePatient(){
    this.patientservice.createPatient(this.patient).subscribe( data =>{
      console.log(data);
      this.goToPatientList();
    },
    error => console.log(error));
  }
  goToPatientList(){
    this.router.navigate(['/patientinfo']);
  }

  onSubmit(){
    console.log(this.patient);
    this.savePatient();


  }

}
