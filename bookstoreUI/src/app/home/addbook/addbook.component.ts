import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddBookComponent implements OnInit {
  name:String = "Hoang";
  constructor() { }

  ngOnInit(): void {
  }

}