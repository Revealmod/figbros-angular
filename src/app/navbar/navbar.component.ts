import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../assets/css/navbar.css']
})
export class NavbarComponent implements OnInit {

  brand = {
    text: 'FigBros',
    image: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
