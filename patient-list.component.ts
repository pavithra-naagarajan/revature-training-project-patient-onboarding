import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  createPatientAccount(){
    
  this.router.navigate(['signUp']);
  }

}
