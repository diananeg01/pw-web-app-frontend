import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../model/book.model";

const BKE_API = 'http://localhost:8080/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookEndpointService {

  constructor(private http: HttpClient) {}

  getBooks() {
    this.http.get(BKE_API);
  }

  getBookById(id: number) {
    this.http.get(BKE_API + `/id/${id}`);
  }

  getBooksByTitle(title: string) {
    this.http.get(BKE_API + `/title/${title}`);
  }

  addBook(newBook: BookModel) {
    this.http.post(BKE_API + `/add`, {...newBook});
  }

  editBook(newBook: BookModel, title: string, publishingHouse: string) {
    this.http.put(BKE_API + `/edit?oldTitle=${title}&oldPublishingBook=${publishingHouse}`, {...newBook});
  }

  deleteBook(id: number) {
    this.http.delete(BKE_API + `/delete?id=${id}`);
  }
}
