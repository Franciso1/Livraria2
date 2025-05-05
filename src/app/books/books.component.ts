import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../services/book.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  FormGroupBooks: FormGroup

  constructor(private bookService: BookService,
              private FormBuilder: FormBuilder
  )
  {
    this.FormGroupBooks = FormBuilder.group ({
      id: [''],
      titulo: [''],
      Autor:[''],
      Editora:[''],
      Preço:['']
    })
  }
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }
}
