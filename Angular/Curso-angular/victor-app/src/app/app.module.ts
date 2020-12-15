import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteModule } from './route/route.module';

//servicios
import { HomeService } from './services/externo.service';


import { AppComponent } from './app.component';
import { VideojuegoComponent } from './Components1/videojuego.component';
import { TenisComponent } from './tenis/tenis.component';
import { RopaComponent } from './ropa/ropa.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    TenisComponent,
    RopaComponent,
    HomeComponent,
    ContactoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
