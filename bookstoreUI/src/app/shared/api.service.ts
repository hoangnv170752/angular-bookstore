import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  postBook(data: any) {
    return this._http.post<any>("http://localhost:3000/book", data).pipe(map((res: any) => {
      return res
    }))
  }

  getBook() {
    return this._http.get<any>("http://localhost:3000/book").pipe(map((res:any)=> {
      return res
    }))
  }

  putBook(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/book/" + id,data).pipe(map((res:any)=> {
      return res
    }))
  }

  // Delete Method For Update Student
  deleteBook(id:number){
    return this._http.delete<any>("http://localhost:3000/book/" + id).pipe(map((res:any)=> {
      return res
    }))
  }
}
