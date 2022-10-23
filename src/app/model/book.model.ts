export class BookModel {
  id: string;
  title: string;
  author: string;
  publishingHouse: string;
  description: string;

  constructor(id: string, title: string, author: string, publishingHouse: string, description: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishingHouse = publishingHouse;
    this.description = description;
  }
}
