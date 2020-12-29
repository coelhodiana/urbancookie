import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { Publicacao2Component } from './publicacao2/publicacao2.component';
import { Publicacao3Component } from './publicacao3/publicacao3.component';
import { ShopComponent } from './shop/shop.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'loja', component: ShopComponent},
  {path: 'publicacao', component: PublicacaoComponent},
  {path: 'publicacao2', component: Publicacao2Component},
  {path: 'publicacao3', component: Publicacao3Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }