import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DeletePostComponent } from './admin/delete-post/delete-post.component';
import { HomecontentComponent } from './admin/homecontent/homecontent.component';
import { LoginComponent } from './admin/login/login.component';
import { NewpostComponent } from './admin/newpost/newpost.component';
import { UsersComponent } from './admin/users/users.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { Publicacao2Component } from './publicacao2/publicacao2.component';
import { Publicacao3Component } from './publicacao3/publicacao3.component';
import { ShopComponent } from './shop/shop.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'loja', component: ShopComponent },
  { path: 'publicacao', component: PublicacaoComponent },
  { path: 'publicacao2', component: Publicacao2Component },
  { path: 'publicacao3', component: Publicacao3Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'homecontent', component: HomecontentComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'delete-post/:id', component: DeletePostComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }