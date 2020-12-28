import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { ShopComponent } from './shop/shop.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'loja', component: ShopComponent},
  {path: 'publicacao', component: PublicacaoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }