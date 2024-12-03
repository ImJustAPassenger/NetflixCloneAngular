import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from './movie-category.component';
import { MovieCardModule } from '../movie-card/movie-card.module';



@NgModule({
  declarations: [MovieCategoryComponent],
  imports: [
    CommonModule,
    MovieCardModule
  ],
  exports:[
    MovieCategoryComponent,
  ]
})
export class MovieCategoryModule { }
