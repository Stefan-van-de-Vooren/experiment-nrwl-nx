import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { GraphComponent } from './graph/graph.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IconComponent, ButtonComponent, GraphComponent, ImageComponent],
  exports: [IconComponent, ButtonComponent, GraphComponent, ImageComponent]
})
export class UiComponentsModule {}
