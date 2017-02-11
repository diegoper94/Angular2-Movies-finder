import { Component, OnInit } from '@angular/core';
import { MoviesService  } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
 private id: String;
 private name: String;
 private movies: Array<Object>;
 
 constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute ) { 
  
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
     this.id = params['id'];
     this.name = params['name'];
     this.moviesService.getMoviesByGenre(this.id).subscribe((res) => {
      this.movies = res.results;
    }); 
   });
  }
}
