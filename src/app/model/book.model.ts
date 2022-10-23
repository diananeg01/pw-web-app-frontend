export class BookModel {
  id: string;
  title: string;
  author: string;
  publishingHouse: string;
  description: string;
  category: string;
  price: number;

  constructor(id: string, title: string, author: string, publishingHouse: string, description: string, category: string, price: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishingHouse = publishingHouse;
    this.description = description;
    this.category = category;
    this.price = price;
  }
}
