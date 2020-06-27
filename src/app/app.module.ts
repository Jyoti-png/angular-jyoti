;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { CardComponent } from './card/card.component';
import { ServicesChildComponent } from './services-child/services-child.component';
import { DesignutilityService } from './designutility.service';
import { LoginChildComponent } from './login-child/login-child.component';
//import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouting ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, AboutComponent, ServicesComponent, ContactusComponent, LoginComponent, HomeComponent,  AppNotFoundComponent, CardComponent, ServicesChildComponent, LoginChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DesignutilityService]
})
export class AppModule { }
