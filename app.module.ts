import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientSignUpComponent } from './components/patientSignUp/patientSignUp.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientSignUpComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
