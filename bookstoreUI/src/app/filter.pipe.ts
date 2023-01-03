import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(books: Book[], filterText: String, filterStatus: String, filterDate: String): Book[] {
    if (books.length == 0 || filterText == '') {
      if (filterStatus != '') {
        return books.filter(({ status }) => {
          return status.trim().toLowerCase() == filterStatus.trim().toLowerCase()
        })
      }
      if (filterDate != '') {
        return books.filter(({ date }) => {
          return date.trim().toLowerCase() == filterDate.trim().toLowerCase()
        })
      }
      return books
    }
    else {
      if (filterStatus != '') {
        return books.filter(({ name, status }) => {
          return name.trim().toLowerCase().includes(filterText.trim().toLowerCase()) && status.trim().toLowerCase() == filterStatus.trim().toLowerCase()
        })
      }
      return books.filter(({ name }) => {
        return name.trim().toLowerCase().includes(filterText.trim().toLowerCase())
      })
    }
  }
}
