import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/utility/movie.service';
import { Movies } from 'src/app/utility/Movies';

@Component({
  selector: 'app-movie-detailed-info',
  templateUrl: './movie-detailed-info.component.html',
  styleUrls: ['./movie-detailed-info.component.scss']
})
export class MovieDetailedInfoComponent implements OnInit {
  id:any;
  movie:any;

  movies:Movies[]=[];

  constructor(private activatedRoute:ActivatedRoute, private _movieService:MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      //console.log("id)"+this.id);

      //getting product by id
      this.movie=this._movieService.getById(this.id);
        });
  }

}
