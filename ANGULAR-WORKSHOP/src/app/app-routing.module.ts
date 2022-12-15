import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FavPhotosComponent } from './components/fav-photos/fav-photos.component';
import { ChoresListComponent } from './components/chores-list/chores-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ChorusComponent } from './components/chorus/chorus.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailedInfoComponent } from './components/movie-detailed-info/movie-detailed-info.component';

const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"movies-info", component:MoviesComponent},
{path:"fav-photos", component:FavPhotosComponent},
{path:"chorus-list", component:ChoresListComponent},
{path:"movie-list", component:MovieListComponent},
{path:"chorus", component:ChorusComponent},
{path:"getMovie/:id", component:MovieDetailsComponent},
{path:"getMovieDetail/:id", component:MovieDetailedInfoComponent},
{path:"add-movies", component:MovieDetailsComponent},

{path:'',redirectTo:"/home", pathMatch:'full'}  //it will check the url; if u provide other characters other than '' it will not work
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
