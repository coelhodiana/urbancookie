import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ShopComponent } from './shop/shop.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { Publicacao2Component } from './publicacao2/publicacao2.component';
import { Publicacao3Component } from './publicacao3/publicacao3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SobreComponent,
    ShopComponent,
    GaleriaComponent,
    PublicacaoComponent,
    Publicacao2Component,
    Publicacao3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
