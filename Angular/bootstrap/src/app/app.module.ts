import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteModule } from './route/router.module';

//Components
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';


//services
import { BienvenidoService } from './services/bienvenido.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouteModule
  ],
  providers: [
    BienvenidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
