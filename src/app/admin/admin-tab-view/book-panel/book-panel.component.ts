import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {BookModel} from "../../../model/book.model";

@Component({
  selector: 'pw-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {

  books: BookModel[] = [];
  selectedBooks: BookModel[] = [];
  book: BookModel;
  bookDialog: boolean;
  submitted: boolean;

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    //ia din endpoint
  }

  editBook(book: BookModel) {
    this.book = {...book};
    this.bookDialog = true;
  }

  deleteBook(book: BookModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter(val => val.id !== book.id);
        this.book = {};
        // endpoint
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Deleted!', life: 3000});
      }
    });
  }

  deleteSelectedBooks() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected books?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter(val => !this.selectedBooks.includes(val));
        this.selectedBooks = [];
        //endpoint
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Books Deleted!', life: 3000});
      }
    });
  }

  openNew() {
    this.book = {};
    this.submitted = false;
    this.bookDialog = true;
  }

  saveBook() {
    this.submitted = true;

    if (this.book.title?.trim()) {
      if (this.book.id) {
        this.books[this.findIndexById(this.book.id)] = this.book;
        //endpoint
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Updated', life: 3000});
      }
      else {
        this.book.id = this.createId();
        // this.product.image = 'product-placeholder.svg';
        this.books.push(this.book);
        //endpoint
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Added!', life: 3000});
      }

      this.books = [...this.books];
      this.bookDialog = false;
      this.book = {};
    }
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }

  private findIndexById(id: string) {
    let index = -1;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  private createId() {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
