import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/utility/movie.service';
import { Movies } from 'src/app/utility/Movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id:any;
  movie:any;

  movies:Movies[]=[];

  constructor(private activatedRoute:ActivatedRoute, private _movieService:MovieService, private _router:Router, private _movieDetails:MovieDetailsComponent) {

  }
  ngOnInit(): void {
   
    //movie details logic:
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      //console.log("id)"+this.id);

      //getting product by id
      this.movie=this._movieService.getById(this.id);
        });

        //detailed info logic:
        this.movies=this._movieService.getAllMovies();
  }

  getMovieDetail(movieId:number){

    this._router.navigate(['/getMovieDetail/'+movieId]); //getProduct is coming from html after click through data binding.
  
  }
}