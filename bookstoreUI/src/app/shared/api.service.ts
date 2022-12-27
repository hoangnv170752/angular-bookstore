import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { bookmodel } from '../Model/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/book/';

  Getallbook(): Observable<bookmodel[]> {
    return this.http.get<bookmodel[]>(this.apiurl);
  }

  GetBookbycode(id: any): Observable<bookmodel> {
    return this.http.get<bookmodel>(this.apiurl + '/' + id);
  }

  RemoveBookbycode(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  CreateBook(bookmodel: any) {
    return this.http.post(this.apiurl, bookmodel);
  }

  UpdateBook(id: any, bookmodel: any) {
    return this.http.put(this.apiurl + '/' + id, bookmodel);
  }
}
