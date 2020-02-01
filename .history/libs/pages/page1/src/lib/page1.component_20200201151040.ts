import { Component, OnInit } from '@angular/core';
import { tour1, tour2 } from './data';

@Component({
  selector: 'sap-page4',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  dataTour1: any = tour1.results;
  dataTour2: any = tour2.results;

  constructor() {}

  ngOnInit() {}
}
