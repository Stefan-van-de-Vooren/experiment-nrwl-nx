import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';
import { ShellModule } from '@sap/shell';
import { UiComponentsModule } from '@sap/ui/components';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    UiComponentsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: Page2Component}
    ])
  ],
  declarations: [Page2Component],
  entryComponents: [Page2Component]
})
export class Page2Module {}
