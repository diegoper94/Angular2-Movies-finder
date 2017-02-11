import { Component } from '@angular/core';
import { MoviesService  } from '../movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  private movies: Array<Object>;

  constructor(private moviesService: MoviesService) { 
    this.moviesService.getUpcomingMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }
}
