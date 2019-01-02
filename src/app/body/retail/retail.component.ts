import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {

  classes: {row: string, col: string};
  items: Array<Array<string>>

  constructor() {
    this.classes = {
      row: 'row flex-grow-1',
      col: 'clickable col d-flex justify-content-center align-items-center text-center border bg-fb-orange text-fb-white'
    };

    this.items = [
      ['Melindas', 'Hot Sauce Brothers'],
      ['Katies', 'More coming soon!'],
      ['More coming soon!', 'More coming soon!']
    ];
  }

  ngOnInit() {
  }

}
