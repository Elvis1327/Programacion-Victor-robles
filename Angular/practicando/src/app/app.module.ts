import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';

//Services
import { FormularioService } from './services/formulario.service';
import { InicioService } from './services/inicio.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormularioService,
    InicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
