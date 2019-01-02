import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css', '../../assets/css/navbar.css']
})
export class NavbarMobileComponent implements OnInit {

  brand = {
    text: 'FigBros',
    image: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
