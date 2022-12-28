import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() inputLabel = ''
  @Input() inputValue = ''
  filterText: any;

  @Output() inputValueChange : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.inputValueChange.emit(this.inputValue);
  }

  emitText(){
    this.inputValueChange.emit(this.filterText)
  }
}
