import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MmssPipe } from './mmss.pipe';
import { ListanewsComponent } from './listanews/listanews.component';
import { MetroComponent } from './metro/metro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MmssPipe,
    ListanewsComponent,
    MetroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
