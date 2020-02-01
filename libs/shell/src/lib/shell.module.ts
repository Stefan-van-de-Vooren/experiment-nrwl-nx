import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { ContentComponent } from './content/content.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, PageComponent, ContentComponent, HeaderTitleComponent, FooterComponent],
  exports: [HeaderComponent, PageComponent, ContentComponent, HeaderTitleComponent, FooterComponent]
})
export class ShellModule {}
