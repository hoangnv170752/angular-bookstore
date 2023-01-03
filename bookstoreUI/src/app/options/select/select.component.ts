import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
  @Input() selectLabel: String = ''
  @Input() selectValue: String = ''
  @Input() selectOption: String[]=[]
  @Input() selectDate: String = ''
  selectedValue: any;
  
  @Output() selectedValueChange : EventEmitter<string> = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }
  emitStatus(){
    this.selectedValueChange.emit(this.selectedValue)
  }
}
