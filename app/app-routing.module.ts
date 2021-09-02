import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientSignUpComponent } from './components/patientSignUp/patientSignUp.component';


const routes: Routes = 
[
  { path: '', component:PatientListComponent },
  { path: 'signUp', component:PatientSignUpComponent }/*
  { path: 'addProduct/:productId', component:ProductAddComponent } */
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
