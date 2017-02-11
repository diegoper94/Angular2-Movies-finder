import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private topRatedList: Array<Object>;
  private popularMovies: Array<Object>;
  private moviesSearch: Array<Object>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getTopRatedMovies().subscribe((res) => {
      this.topRatedList = res.results;
    })
    this.moviesService.getPopularMovies().subscribe((res) => {
      this.popularMovies = res.results;
    });
  }

  moviesSearchBar(search) {
    this.moviesService.getMoviesBySearch(search).subscribe((res) => {
      this.moviesSearch = res.results;
    });
  }
}
