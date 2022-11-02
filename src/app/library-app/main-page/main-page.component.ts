import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {BookModel} from "../../model/book.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  books: BookModel[] = []

  sortOptions: SelectItem[] = [];
  sortOrder: number;
  sortField: string;
  sortKey: any;

  constructor() {
    this.sortOrder = 0;
    this.sortField = '';
  }

  ngOnInit(): void {
    console.log("main-page");
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
