import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './home/addbook/addbook.component';
import { BookDetailComponent } from './home/bookdetail/bookdetail.component';

const routes: Routes = [
  {path: 'bookdetail', component: BookDetailComponent},
  {path: 'addbook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
