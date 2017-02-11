import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MoviesService {
  apiKey: string = "fe3a49b05f7a1cf712a2d55963e143f6";

  constructor(private http: Http) {}

  getGenres() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`
      ).map((response : Response) => {
      return response.json();
      });
  }

  getMoviesByGenre(id: String) {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .map((response: Response) => {
       return response.json();
    });
  }

  getUpcomingMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)
    .map((response: Response) => {
       return response.json();
    });  
  }

  getPopularSeries() {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .map((response: Response) => {
       return response.json();
    });
  }

  getTopRatedMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
    .map((response: Response) => {
       return response.json();
    });
  }

  getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .map((response: Response) => {
       return response.json();
    });
  }

  getMoviesBySearch(search: string) {
   return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${search}&page=1&include_adult=false`)
   .map((response: Response) => {
       return response.json();
    });
  }

  getMovieDetails(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`)
    .map((response: Response) => {
       return response.json();
    });
  }

  getSerieDetails(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`)
    .map((response: Response) => {
       return response.json();
    });
  }
}
