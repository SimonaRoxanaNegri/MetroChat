import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MmssPipe } from './pipe/mmss.pipe';
import { ListanewsComponent } from './listanews/listanews.component';
import { MetroComponent } from './metro/metro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';
import { PopupComponent } from './popup/popup.component';
import { RouterModule, Routes } from '@angular/router';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MmssPipe,
    ListanewsComponent,
    MetroComponent,
    DettagliotrenoComponent,
    PopupComponent,
    PreferitiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TreniComponent },
      { path: 'preferiti', component: PreferitiComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
