import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sap-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  constructor() { console.log('paeg 4 constrctor')}

  ngOnInit() {
    console.log('paeg 4 onite')
  }

}
