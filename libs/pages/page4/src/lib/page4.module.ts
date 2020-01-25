import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page4Component } from './page4.component';
import { ShellModule } from '@sap/shell'

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: Page4Component}
    ])
  ],
  declarations: [Page4Component],
  entryComponents: [Page4Component]
})
export class Page4Module {}
