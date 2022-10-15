import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("confirm")
  }

  finish() {
    // salveaza user ul si trimite pe backend
    this.router.navigate(['/main-page']);
  }

  back() {
    this.router.navigate(['sign-up-details/personal-information']);
  }
}
