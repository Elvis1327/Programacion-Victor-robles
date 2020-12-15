import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoComponent } from '../Components1/videojuego.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { HomeComponent } from '../home/home.component';
import { RopaComponent } from '../ropa/ropa.component';
import { TenisComponent } from '../tenis/tenis.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'videojuego', component: VideojuegoComponent},
  {path: 'ropa', component: RopaComponent},
  {path: 'tenis', component: TenisComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})


export class RouteModule {}
