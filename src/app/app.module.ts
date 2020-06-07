import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
//import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouting ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, AboutComponent, ServicesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
