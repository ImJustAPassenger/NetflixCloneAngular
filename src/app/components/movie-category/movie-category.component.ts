import { Component, Input, input } from '@angular/core';
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss',
})
export class MovieCategoryComponent {
  @Input() title = '';
  @Input() movieList:Movie[] = [];
}
