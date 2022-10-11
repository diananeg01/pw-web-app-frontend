import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  firstname: any;
  lastname: any;

  personalInformationFormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required])
  });

  submitted: boolean;

  constructor(private router: Router) {
    this.submitted = false;
  }

  ngOnInit(): void {
    console.log("personal info")
  }

  nextPage() {
    if (this.firstname && this.lastname) {
      // salveaza detaliile
      this.router.navigate(['/sign-up/books-read']);
    }

    this.submitted = true;
  }
}
