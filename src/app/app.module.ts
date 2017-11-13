import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//elements
import { NavigationComponent } from './components/elements/navigation/navigation.component';
import { ContentComponent } from './components/elements/content/content.component';
import { FooterComponent } from './components/elements/footer/footer.component';

//page container
import { PagesComponent } from './components/pages/pages.component';
//pages
import { PageIndexComponent } from './components/pages/page-index/page-index.component';
import { PageProjectsComponent } from './components/pages/page-projects/page-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    PagesComponent,
    PageIndexComponent,
    PageProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
