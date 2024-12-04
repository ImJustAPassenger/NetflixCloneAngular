import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tmdbConfig } from "../constants/config";

@Injectable({
    providedIn:'root'
})
export class MovieService {
    constructor(private http: HttpClient) {
        
    }
    getPopularMovies()
    {
        const headers = this.getHeader();
        return this.http.get("https://api.themoviedb.org/3/movie/popular",
            {
                headers: headers
            }
        );
    }
    getNowPlayingMovies()
    {
        const headers = this.getHeader();
        return this.http.get("https://api.themoviedb.org/3/movie/now_playing",
            {
                headers: headers
            }
        );
    }
    getTopRatedMovies()
    {
        const headers = this.getHeader();
        return this.http.get("https://api.themoviedb.org/3/movie/top_rated",
            {
                headers: headers
            }
        );
    }
    getUpcomingMovies()
    {
        const headers = this.getHeader();
        return this.http.get("https://api.themoviedb.org/3/movie/upcoming",
            {
                headers: headers
            }
        );
    }
    
    
    getHeader()
    {
        let headers = new HttpHeaders();
        headers = headers.append("accept","application/json");
        headers = headers.append("Authorization","Bearer "+tmdbConfig.accessToken);
        return headers;
    }

    getMoviesVideo(movieId:number)
    { const headers = this.getHeader();
        return this.http.get(`https://api.themoviedb.org/3/keyword/${movieId}/movies`,
            {
                headers: headers
            }
        );
    }
}