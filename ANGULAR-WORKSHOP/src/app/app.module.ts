import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ChoresListComponent } from './components/chores-list/chores-list.component';
import { FavPhotosComponent } from './components/fav-photos/fav-photos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { FavLinksComponent } from './components/fav-links/fav-links.component';
import { ChorusComponent } from './components/chorus/chorus.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPipe } from './utility/search.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SearchDatePipe } from './utility/search-date.pipe';
import { ChoresInfoComponent } from './components/chores-info/chores-info.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailedInfoComponent } from './components/movie-detailed-info/movie-detailed-info.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
    FavPhotosComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    FavLinksComponent,
    ChorusComponent,
    MoviesComponent,
    HomeComponent,
    SearchPipe,
    SearchDatePipe,
    ChoresInfoComponent,
    MovieDetailsComponent,
    MovieDetailedInfoComponent,
    AddMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //responsible for performing the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
