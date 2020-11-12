import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'shows', component: SeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
