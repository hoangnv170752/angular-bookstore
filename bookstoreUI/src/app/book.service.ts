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
  getCreatebook(bookId: number) {
    BOOKS.push({ id: bookId, name: 'Tên sách', status: 'Chưa đọc', date: '2023-1-1'})
    return BOOKS.find(({ id }) => id == bookId)
  }
  addBook(bookId: number,  bookName: String, bookStatus:String, bookDate: String): void {
    const bookToAdd = this.getCreatebook(bookId);
    if (bookToAdd != undefined) {
      bookToAdd.name = bookName;
      bookToAdd.status = bookStatus;
      bookToAdd.date = bookDate;
    }
    console.log(bookToAdd);
    
  }
  editBook(bookId: number, bookName: String, bookStatus:String, bookDate: String): void {
    const bookToEdit = this.getEditbook(bookId)

    if (bookToEdit != undefined) {
      bookToEdit.name = bookName;
      bookToEdit.status = bookStatus;
      bookToEdit.date = bookDate;
    }
    console.log(bookToEdit);
  }
  deleteBook(bookId: number) {
    BOOKS.splice(bookId - 1, 1)
  }
  constructor() { }
}