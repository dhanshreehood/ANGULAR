import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.scss']
})
export class FavPhotosComponent implements OnInit {

  constructor() { }

  img1:string="../assets/images/img-1.jpg";
  img2:string="../assets/images/img-2.jpg";
  img3:string="../assets/images/img-3.jpg";
  img4:string="../assets/images/img-4.jpg";
  img5:string="../assets/images/img-5.jpg";

  ngOnInit(): void {  
  }

}