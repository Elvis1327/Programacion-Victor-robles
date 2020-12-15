import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { AppComponent } from '../app.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { BienvenidoComponent } from '../components/bienvenido/bienvenido.component';

const router: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule {

}
