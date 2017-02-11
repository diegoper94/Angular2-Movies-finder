import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { routesConfig } from './app.routing';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SeriesComponent } from './series/series.component';
import { SerieCardComponent } from './serie-card/serie-card.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MovieCardComponent,
    UpcomingComponent,
    SeriesComponent,
    SerieCardComponent,
    MoviesComponent,
    MovieDetailsComponent,
    SerieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routesConfig
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
