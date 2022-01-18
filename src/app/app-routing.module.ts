import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormfillingComponent } from './formfilling/formfilling.component';
import { DoctorinfoComponent } from './homepage/doctorinfo/doctorinfo.component';
import { HomeComponent } from './homepage/home/home.component';
import { PatientformComponent } from './homepage/patientform/patientform.component';
import { ThankyouComponent } from './homepage/thankyou/thankyou.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';

const routes: Routes = [
  {
    path:"formregistration",
    component:FormfillingComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"doctorinfo",
    component:DoctorinfoComponent,
    
  },
  {
    path:"thankyou",
    component:ThankyouComponent,
  },
  {
    path:"patientinfo",
    component:PatientinfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
