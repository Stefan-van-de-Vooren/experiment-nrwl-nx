import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sap-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
