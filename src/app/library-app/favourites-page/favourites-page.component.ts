import { Component, OnInit } from '@angular/core';
import {BookModel} from "../../model/book.model";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.css']
})
export class FavouritesPageComponent implements OnInit {

  favouriteBooks: BookModel[] = []

  sortOptions: SelectItem[] = [];
  sortOrder: number;
  sortField: string;
  sortKey: any;

  constructor() {
    this.sortOrder = 0;
    this.sortField = '';
  }

  ngOnInit(): void {
    console.log("favourites-page");
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
