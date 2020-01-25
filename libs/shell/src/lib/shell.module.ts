import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { ContentComponent } from './content/content.component';
import { HeaderTitleComponent } from './header-title/header-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, PageComponent, ContentComponent, HeaderTitleComponent],
  exports: [HeaderComponent, PageComponent, ContentComponent, HeaderTitleComponent]
})
export class ShellModule {}
