import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component'
import { PeliculasService } from './services/peliculas.service';
import { TarjetasComponent } from './shared/tarjetas/tarjetas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    TarjetasComponent,
    PeliculaComponent,
    NavbarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
