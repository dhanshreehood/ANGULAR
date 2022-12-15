import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.scss']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
link: Array<string>=["https://cybagemis.cybage.com/Framework/Iframe.aspx","https://www.w3schools.com/angular/"];

link1(){
  return this.link[0];
}

link2(){
  return this.link[1];
}

}
