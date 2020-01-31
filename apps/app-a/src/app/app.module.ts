import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'page1',
          loadChildren: () =>
            import('@sap/pages/page1').then(module => module.PagesPage1Module)
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
