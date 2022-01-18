import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Doctor{
  name:string
}
@Component({
  selector: 'app-doctorinfo',
  templateUrl: './doctorinfo.component.html',
  styleUrls: ['./doctorinfo.component.css']
})
export class DoctorinfoComponent implements OnInit {
  doctor:any;
  doctorControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  doctors: Doctor[] = [
    {name: ''},
    
  ];
 

  constructor(private http:HttpClient) { }

  ngOnInit()  {
    let resp=this.http.get("http://localhost:8080/api/doctor");
    resp.subscribe((data)=>this.doctor=data);
  }

 
   
  

}
function data(data: any) {
  throw new Error('Function not implemented.');
}

