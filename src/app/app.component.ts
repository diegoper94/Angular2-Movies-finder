import { Component } from '@angular/core';
import { MoviesService  } from './movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private genres: Array<Object>;
   private id: String;
  
  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute ) { 
   this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.moviesService.getGenres().subscribe((res) => {
      this.genres = res.genres;
    });
  };
}
