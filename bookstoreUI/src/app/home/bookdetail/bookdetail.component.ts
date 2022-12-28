import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Book } from 'src/app/book';

import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookDetailComponent implements OnInit {
  books: Book[] = []
  inputLabelBookDetail = 'Tìm kiếm: '
  selectLabelBookDetail = 'Trạng thái: '

  isEditEnable: boolean = false;
  isEditEnableIndex: number | null = null

  statusOption: String[] = ['Chưa đọc', 'Đã đọc']
  filterStatusOption: String[] = ['','Chưa đọc', 'Đã đọc']
  bookNameEdit: String = '';
  bookStatusEdit: String = ''
  filterText:String = ''
  filterStatus:String = ''

  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.books = this.bookService.getBooks()
  }

  onEdit(bookId: number) {

    this.isEditEnable = true; 
    const bookToEdit = this.bookService.getEditbook(bookId) // lay ra sach can edit 
    console.log(bookToEdit);
    
    if (bookToEdit != undefined) {
      this.isEditEnableIndex = bookToEdit.id;
      this.bookNameEdit = bookToEdit.name;
    }
  }
  onDelete(bookId:number){
    this.bookService.deleteBook(bookId)
  }
  onSave(bookId: number, bookName: String, bookStatus:String){
    this.bookService.editBook(bookId, bookName, bookStatus)
    this.isEditEnable = !this.isEditEnable;

  }
  onCancel(){
    this.isEditEnable = false
  }
  onSelected(status: String){
    this.bookStatusEdit = status
  }
  getFilterText(filterText:String){
    this.filterText = filterText
  }
  getFilterStatus(filterStatus:String){
    this.filterStatus = filterStatus
  }
}
