import { Component, OnInit } from '@angular/core';
import {BookModel} from "../../model/book.model";

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {
  newBook: BookModel = {};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
