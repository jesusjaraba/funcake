import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './servicios/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { AuthService } from './servicios/auth.service';
import { AuthGuardService } from './servicios/auth-guard.service';
import { CompaniesComponent } from './components/companies/companies.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { TortasComponent } from './components/tortas/tortas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PerfilComponent } from './perfil/perfil.component';
import { MisPostresComponent } from './mis-postres/mis-postres.component';
import { FooterComponent } from './footer/footer.component'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    CompaniesComponent,
    TortasComponent,
    HeroeComponent,
    PerfilComponent,
    MisPostresComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [
    HeroesService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
