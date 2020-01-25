import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page3Component } from './page3.component';
import { ShellModule } from '@sap/shell';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: Page3Component}
    ])
  ],
  declarations: [Page3Component],
  entryComponents: [Page3Component]
})
export class Page3Module {}
