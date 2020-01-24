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
            import('@myworkspace/page1').then(module => module.Page1Module)
        },
        {
          path: 'page2',
          loadChildren: () =>
            import('@myworkspace/page2').then(module => module.Page2Module)
        },
        {
          path: 'page3',
          loadChildren: () =>
            import('@myworkspace/page3').then(module => module.Page3Module)
        },
        {
          path: 'page4',
          loadChildren: () =>
            import('@myworkspace/page4').then(module => module.Page4Module)
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
