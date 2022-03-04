import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MetroComponent } from './metro/metro.component';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';
import { Error404Component } from './error404/error404.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';
import { MmssPipe } from './pipe/mmss.pipe';
import { DettaglioComponent } from './treni/dettagliotreno/dettaglio/dettaglio.component';
import { TrenorossoComponent } from './treni/dettagliotreno/trenorosso/trenorosso.component';
import { TrenogialloComponent } from './treni/dettagliotreno/trenogiallo/trenogiallo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    PreferitiComponent,
    LoginComponent,
    MetroComponent,
    DettagliotrenoComponent,
    MmssPipe,
    DettaglioComponent,
    TrenorossoComponent,
    TrenogialloComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
