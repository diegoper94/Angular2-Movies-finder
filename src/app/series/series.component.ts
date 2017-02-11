import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  private series: Array<Object>;

  constructor(private moviesService: MoviesService) { 

  }

  ngOnInit() {
    this.moviesService.getPopularSeries().subscribe((res) => {
    this.series = res.results;
    });
  }

}
