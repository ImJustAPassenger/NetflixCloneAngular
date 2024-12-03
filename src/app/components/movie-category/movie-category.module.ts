import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from './movie-category.component';



@NgModule({
  declarations: [MovieCategoryComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MovieCategoryComponent
  ]
})
export class MovieCategoryModule { }
