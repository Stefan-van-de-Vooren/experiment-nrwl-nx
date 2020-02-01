import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { UiComponentsGraphModule } from './graph/graph.module';

@NgModule({
  imports: [CommonModule, UiComponentsGraphModule],
  declarations: [IconComponent, ButtonComponent, ImageComponent],
  exports: [IconComponent, ButtonComponent, ImageComponent, UiComponentsGraphModule]
})
export class UiComponentsModule {}
