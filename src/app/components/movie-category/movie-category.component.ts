import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss'
})
export class MovieCategoryComponent {
  @Input() title=""
}
