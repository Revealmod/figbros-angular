import { Component, OnInit } from '@angular/core';

import * as generate from 'lorem-ipsum';

@Component({
  selector: 'fb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ph1: string;
  ph2: string;

  constructor() {
    this.ph1 = this.placeholder();
    this.ph2 = this.placeholder();
  }

  placeholder = () => generate({
    count: 1,
    units: 'paragraphs',
    sentenceLowerBound: 4,
    sentenceUpperBound: 6,
    paragraphLowerBound: 5,
    paragraphUpperBound: 7
  })

  ngOnInit() {
  }

}
