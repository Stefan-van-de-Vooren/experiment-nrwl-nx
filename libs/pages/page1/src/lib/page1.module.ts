import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1.component';
import { UiHeaderModule } from '@myworkspace/ui/header'

@NgModule({
  imports: [
    CommonModule,
    UiHeaderModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: Page1Component}
    ])
  ],
  declarations: [Page1Component],
  entryComponents: [Page1Component]
})
export class Page1Module {}
