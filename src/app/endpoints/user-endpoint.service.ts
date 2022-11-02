import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/user.model";
import {BookModel} from "../model/book.model";

const BKE_API = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserEndpointService {

  constructor(private http: HttpClient) {}

  signUp(username: string, email: string, password: string, firstname: string, lastname: string) {
    this.http.post(BKE_API + `/register`, {
      username,
      email,
      password,
      firstname,
      lastname
    });
  }

  signIn(username: string, password: string) {
    this.http.post(BKE_API + `/log-in?username=${username}&password=${password}`, {});
  }

  getUsers() {
    this.http.get(BKE_API);
  }

  getUserWithUsername(username: string) {
    this.http.get(BKE_API + `/username/${username}`);
  }

  getUserWithEmail(email: string) {
    this.http.get(BKE_API + `/email/${email}`);
  }

  editUser(newUser: UserModel, email: string) {
    this.http.put(BKE_API + `/edit?oldEmail=${email}`, {...newUser});
  }

  deleteUser(id: number) {
    this.http.delete(BKE_API + `/delete?id=${id}`);
  }

  addBookToFavourites(username: string, book: BookModel) {
    this.http.post(BKE_API + `user/${username}/add-favourites`, {...book});
  }

  getFavouritesList(username: string) {
    this.http.get(BKE_API + `/user/${username}/favourites`);
  }
}
