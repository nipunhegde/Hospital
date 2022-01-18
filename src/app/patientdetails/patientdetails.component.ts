import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient1 } from '../patient1';
import { PatientregistrationService } from '../service/patientregistration.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
  id: number
  patient:Patient1
  constructor(private route: ActivatedRoute, private patientregistrationservice:  PatientregistrationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.patient = new Patient1();
    this.patientregistrationservice.getPatientById(this.id).subscribe( data => {
      this.patient = data;
    });
  }

}

 