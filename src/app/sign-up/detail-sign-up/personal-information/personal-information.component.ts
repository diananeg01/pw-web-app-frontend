import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  providers: [MessageService]
})
export class PersonalInformationComponent implements OnInit {
  firstname: any;
  lastname: any;

  personalInformationFormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required])
  });

  submitted: boolean;

  constructor(private router: Router,
              private messageService: MessageService) {
    this.submitted = false;
  }

  ngOnInit(): void {
    console.log("personal info")
  }

  nextPage() {
    if (this.firstname && this.lastname) {
      // salveaza detaliile
      this.router.navigate(['sign-up-details/confirm']);
    } else {
      this.messageService.add({severity:'error', summary:'Unfinished', detail:'You must complete all fields before confirming!'})
    }
    this.submitted = true;
  }

  backToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
