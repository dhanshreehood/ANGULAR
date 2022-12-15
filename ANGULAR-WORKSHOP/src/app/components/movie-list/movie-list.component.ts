import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor() {
   }
  
//mopvies to watch
  movies:Array<string> = ['Hidden Figures', 'The incredibles', 'Princess Bride'];
  
//watched movies list
watchedMovies:Array<string> = ['The manchurian candidate', 'Oceans 8'];

  ngOnInit(): void {
  }
  
  madd:Array<string> | undefined;
  
  addtowatched(i:number){
    this.madd = this.movies.splice(i,1);
    this.watchedMovies.push(this.madd[0]);
  }
}
