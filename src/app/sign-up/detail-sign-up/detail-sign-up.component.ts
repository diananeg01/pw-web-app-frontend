import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-detail-sign-up',
  templateUrl: './detail-sign-up.component.html',
  styleUrls: ['./detail-sign-up.component.css']
})
export class DetailSignUpComponent implements OnInit {
  stepItems: MenuItem[] = [{
      label: 'Personal Information',
      routerLink: 'personal-information'
    },{
      label: 'What have you read?',
      routerLink: 'books-read'
    },{
      label: 'Confirm data',
      routerLink: 'confirm'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("detailed")
  }

}
