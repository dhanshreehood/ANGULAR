import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<!-- footer -->
<footer class="text-center text-white bg-dark fixed-bottom">
	<div class="text-center text-light bg-dark p-3">Legal | Privacy� 2022 All Rights Reserved.</div>
</footer>

  `,
  styles: [
    `footer{
      background-color: black;
      color:white;
      text-align:centre;    
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
