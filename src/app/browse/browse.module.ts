import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { HeaderModule } from '../components/header/header.module';
import { MovieCategoryModule } from '../components/movie-category/movie-category.module';


@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    HeaderModule,
    CommonModule,
    BrowseRoutingModule,
    MovieCategoryModule
  ]
})
export class BrowseModule { }
