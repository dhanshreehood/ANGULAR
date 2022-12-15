import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styles: [
  ]
})
export class AddMoviesComponent implements OnInit {
 
  addMovieForm:FormGroup=this._fb.group({
    title:['',  [Validators.required, Validators.minLength(3)]],
    date: ['', [Validators.required]],
    poster: ['', [Validators.required]],
    summary: ['', [Validators.required]],
    director: ['', [Validators.required]],
    rating: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    boxOffice:['', [Validators.required]]
});
  
constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }
  addMovie(){
    console.log(this.addMovieForm.value)
  }
}
