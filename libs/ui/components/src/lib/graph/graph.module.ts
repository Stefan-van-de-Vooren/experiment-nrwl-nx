
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphComponent } from './graph.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
  ],
  declarations: [GraphComponent],
  exports: [GraphComponent]
})
export class UiComponentsGraphModule {}
