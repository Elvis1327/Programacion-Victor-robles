import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//Componentes
import { AppComponent } from '../app.component';
import { ExternoComponent } from '../components/externo/externo.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { RopaComponent } from '../components/ropa/ropa.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'ropa', component: RopaComponent},
  {path: 'externo', component: ExternoComponent},
  {path: '**', component: AppComponent}
];

@NgModule ({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})

export class RouteModule { }

