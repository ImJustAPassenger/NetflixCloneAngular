import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MovieCategoryComponent } from '../movie-category/movie-category.component';



@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule
  ],
  exports:[MovieCardComponent]
})
export class MovieCardModule { }
