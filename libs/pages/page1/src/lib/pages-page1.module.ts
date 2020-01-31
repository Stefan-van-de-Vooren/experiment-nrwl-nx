import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
    {path: '', pathMatch: 'full', component: PageComponent}
    ])
  ],
  declarations: [PageComponent],
  exports: [PageComponent],
  entryComponents: [PageComponent]
})
export class PagesPage1Module {}
