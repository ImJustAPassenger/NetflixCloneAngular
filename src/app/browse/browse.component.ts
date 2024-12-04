import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../types/movie';
import { tmdbConfig } from '../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent implements OnInit {
  popularMovie: Movie[];
  nowPlayingMovies:Movie[];
  topRatedMovies:Movie[];
  upcomingMovies:Movie[];
  bannerMovie!:Movie;
  
  tmdbConfig= tmdbConfig;
  constructor(
    public domSanitizer:DomSanitizer,
    private loginService: LoginService,
    private router: Router,
    private movieService: MovieService
  ) {
    this.popularMovie = this.nowPlayingMovies= this.topRatedMovies=this.upcomingMovies=[];
    this.bannerMovie;
  }

  ngOnInit() {
    if (!this.loginService.isLoggedIn)
      //console.log("user not logged")
      this.router.navigateByUrl('/login');
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovie = result.results;
      this.bannerMovie=this.popularMovie[0];
      this.movieService.getMoviesVideo(this.bannerMovie.id).subscribe((res:any)=>{
        this.bannerMovie.videoKey = res.results.find(
          (x: any) => (x.site = 'YouTube')
        ).key;
      })
      
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      
      this.nowPlayingMovies = result.results;
      
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      
      this.topRatedMovies = result.results;
      
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      
      this.upcomingMovies = result.results;
      
    });
  }
}
