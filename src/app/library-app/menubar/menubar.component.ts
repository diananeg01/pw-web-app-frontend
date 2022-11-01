import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {
    this.items = [
      {
        label: 'Main Page',
        icon: 'pi pi-home',
        routerLink: 'all-books'
      },
      {
        label: 'Favourites',
        icon: 'pi pi-star-fill',
        routerLink: 'favourite-books'
      },
      {
        label: 'Request a book',
        icon: 'pi pi-book',
        routerLink: 'request-book',
        disabled: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
