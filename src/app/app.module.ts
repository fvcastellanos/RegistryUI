import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { ROUTES } from './app.routes';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    IndexComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
