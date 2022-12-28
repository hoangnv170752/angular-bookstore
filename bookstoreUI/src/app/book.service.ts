import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './listbook';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks(): Book[] {
    return BOOKS
  }
  getEditbook(bookId: number) {
    return BOOKS.find(({ id }) => id == bookId)
  }
  editBook(bookId: number, bookName: String, bookStatus:String): void {
    const bookToEdit = this.getEditbook(bookId)

    if (bookToEdit != undefined) {
      bookToEdit.name = bookName;
      bookToEdit.status = bookStatus
    }
  }
  deleteBook(bookId: number) {
    BOOKS.splice(bookId - 1, 1)
  }
  constructor() { }
}
