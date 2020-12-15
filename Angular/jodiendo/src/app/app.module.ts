import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { RopaService } from './services/ropa.service';
import { ExternoService } from './services/externo.service';

//Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { ExternoComponent } from './components/externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RopaComponent,
    ExternoComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RopaService,
    ExternoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
