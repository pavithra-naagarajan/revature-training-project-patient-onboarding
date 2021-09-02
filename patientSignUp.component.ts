import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patientSignUp',
  templateUrl: './patientSignUp.component.html',
  styleUrls: ['./patientSignUp.component.css']
})
export class PatientSignUpComponent implements OnInit {

  patientForm?: FormGroup;
  errorMessage?:string;
  successMessage?:string;
  
  patient?: Patient;
  
  constructor(public activatedRoute :ActivatedRoute,public patientService:PatientService,public formBuilder:FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.patient = new Patient();
    
    this.patientForm = this.formBuilder.group({
      patientId: ['', [Validators.required, Validators.min(1)]],
      patientName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      patientAge: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      mailId: ['', [Validators.required,Validators.email]],
      address: ['', [Validators.required]]
      })
    }
    
  

  patientSignUp() {
    this.patientService.addPatient(this.patientForm?.value)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate([''])
        console.log("#######Saved successfully ");
        
      },
      error => {
        this.errorMessage = "This Product already exists, please try with different id"
        this.router.navigate([''])
        console.log("ERROR in save : " + error);
      });
   
  }

 
  
}


