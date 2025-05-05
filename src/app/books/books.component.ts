import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { id: 0, titulo: '', autor: '', editora: '', preco: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }

  addBook(): void {
    this.http.post<Book>('http://localhost:3000/books', this.newBook).subscribe(book => {
      this.books.push(book);
      this.newBook = { id: 0, titulo: '', autor: '', editora: '', preco: 0 };
    });
  }
}
