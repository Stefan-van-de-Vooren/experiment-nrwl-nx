import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1.component';
import { ShellModule } from '@sap/shell';
import { UiComponentsModule } from '@sap/ui/components';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    UiComponentsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: Page1Component}
    ])
  ],
  declarations: [Page1Component],
  entryComponents: [Page1Component]
})
export class Page1Module {}
