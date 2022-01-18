import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { HomeComponent } from './homepage/home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { PatientformComponent } from './homepage/patientform/patientform.component';
import { PatientregistrationService } from './service/patientregistration.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { DoctorinfoComponent } from './homepage/doctorinfo/doctorinfo.component';
import {MatSelectModule} from '@angular/material/select';
import { ThankyouComponent } from './homepage/thankyou/thankyou.component';
import { FormfillingComponent } from './formfilling/formfilling.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PatientformComponent,
    DoctorinfoComponent,
    ThankyouComponent,
    FormfillingComponent,
    PatientinfoComponent,
    PatientdetailsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
   
  
  ],
  providers: [MatSnackBar,PatientregistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
