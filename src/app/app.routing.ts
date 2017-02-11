import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { AppComponent } from './app.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';

const appRoutes = [
    { path: '', component: MoviesComponent },
    { path: 'popular series', component: SeriesComponent },
    { path: 'upcoming movies', component: UpcomingComponent }, 
    { path: 'genres/:id/:name', component: GenresComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'series/:id', component: SerieDetailsComponent }
];

export const routesConfig = RouterModule.forRoot(appRoutes);