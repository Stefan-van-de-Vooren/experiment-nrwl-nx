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
            import('@sap/pages/page1').then(module => module.Page1Module)
        },
        {
          path: 'page2',
          loadChildren: () =>
            import('@sap/pages/page2').then(module => module.Page2Module)
        },
        {
          path: 'page3',
          loadChildren: () =>
            import('@sap/pages/page3').then(module => module.Page3Module)
        },
        {
          path: 'page4',
          loadChildren: () =>
            import('@sap/pages/page4').then(module => module.Page4Module)
        },
        { path: '**', redirectTo: '/page1', pathMatch: 'full' },
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
