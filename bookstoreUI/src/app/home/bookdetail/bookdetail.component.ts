import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Book } from 'src/app/book';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { BookService } from 'src/app/book.service';
import { BOOKS } from 'src/app/listbook';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookForm = this.fb.group({
    id: ['', {
        validators: [
          //  Validators.required, 
           Validators.maxLength(5)
        ],
        updateOn: 'blur'
    }],
    name: [
        '', 
        [ 
          Validators.required, 
          Validators.minLength(8),
        ]
    ],
    status: [
      '', 
      [ 
        Validators.required, 
      ]
    ],
    date: [
      '', 
      [ 
        Validators.required, 
      ]
    ]
 });
  get id() {
    return this.bookForm.controls['id'];
  }

  get name() {
    return this.bookForm.controls['name'];  
  }

  get status() {
    return this.bookForm.controls['status'];
  }

  get date() {
    return this.bookForm.controls['date'];
  }
  books: Book[] = []
  inputLabelBookDetail = 'Tìm kiếm: '
  selectLabelBookDetail = 'Trạng thái: '
  selectDateBookDetail = 'Ngày mua: '
  isCreateEnable: boolean = true;
  isEditEnable: boolean = false;
  isEditEnableIndex: number | null = null

  statusOption: String[] = ['Chưa đọc', 'Đã đọc']
  filterStatusOption: String[] = ['','Chưa đọc', 'Đã đọc']
  filterDateOption: String[] = ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04']
  bookNameEdit: String = ''
  bookStatusEdit: String = ''
  bookDateEdit: String = ''
  bookNameCreate: String = ''
  bookStatusCreate: String = ''
  bookDateCreate: String = ''
  filterText:String = ''
  filterStatus:String = ''
  filterDate:String = ''
  constructor(private bookService: BookService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.books = this.bookService.getBooks()
  }

  onEdit(bookId: number) {
    this.isEditEnable = true; 
    const bookToEdit = this.bookService.getEditbook(bookId) 
    console.log(bookToEdit);
    
    if (bookToEdit != undefined) {
      this.isEditEnableIndex = bookToEdit.id;
      this.bookNameEdit = bookToEdit.name;
      this.bookDateEdit = bookToEdit.date;
    }
  }
  onDelete(bookId:number){
    this.bookService.deleteBook(bookId)
  }
  onSubmit(bookId: number, bookName: String, bookStatus:String, bookDate: String) {
    this.bookService.addBook(bookId, bookName, bookStatus, bookDate) 
  }
  onSave(bookId: number, bookName: String, bookStatus:String, bookDate: String){
    this.bookService.editBook(bookId, bookName, bookStatus, bookDate)
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
  getFilterDate(filterDate:String){
    this.filterDate = filterDate
  }
}



