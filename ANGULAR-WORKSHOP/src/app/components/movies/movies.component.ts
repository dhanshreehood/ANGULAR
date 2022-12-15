import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/utility/movie.service';
import { Movies } from 'src/app/utility/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  searchBy:string="";
  searchDate:Date=new Date("");

  constructor(private _router:Router, private _movieService:MovieService) {

  }

  movies:Movies[]=[];

  ngOnInit(): void {
    this.movies=this._movieService.getAllMovies();
  }

  getMovie(movieId:number){

  this._router.navigate(['/getMovie/'+movieId]); //getProduct is coming from html after click through data binding.

}
}
