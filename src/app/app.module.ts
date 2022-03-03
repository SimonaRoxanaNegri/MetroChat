import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { TrenorossoComponent } from './treni/dettagliotreno/trenorosso/trenorosso.component';
import { TrenogialloComponent } from './treni/dettagliotreno/trenogiallo/trenogiallo.component';
import { MmssPipe } from './pipe/mmss.pipe';
import { ListanewsComponent } from './listanews/listanews.component';
import { MetroComponent } from './metro/metro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';
import { PopupComponent } from './popup/popup.component';

import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { DettaglioComponent } from './treni/dettaglio/dettaglio.component';


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
    LoginComponent,
    Error404Component,
    TrenorossoComponent,
    TrenogialloComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'inarrivo', component: TreniComponent },
      {
        path: 'inarrivo/dettaglio', component: DettagliotrenoComponent, children: [
          { path: '', redirectTo: '/error', pathMatch: 'full' },
          { path: 'rosso', component: TrenorossoComponent },
          { path: 'giallo', component: TrenogialloComponent },
          { path: ':id', component: DettaglioComponent }
        ]
      },
      { path: 'preferiti', component: PreferitiComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/inarrivo', pathMatch: 'full' },
      { path: 'error', component: Error404Component },
      { path: '**', redirectTo: 'error', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
