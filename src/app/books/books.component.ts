import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'app-books',
    standalone: false,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
    books: Book[] = []
    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.bookService.getBooks().subscribe(data => {
            this.books = data;
        });
    }

    deleteBook(id: number): void {
        this.bookService.deleteBook(id).subscribe(() => {
            this.books = this.books.filter(book => book.id !== id);
        });
    }

    newBook: Book = { id: 0, titulo: '', autor: '', editora: '', preco: 0 };

    addBook(): void {
        this.bookService.addBook(this.newBook).subscribe(book => {
            this.books.push(book);
            this.newBook = { id: 0, titulo: '', autor: '', editora: '', preco: 0 };
        });
    }
}
