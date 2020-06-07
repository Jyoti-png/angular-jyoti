import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
//import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
 
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HeaderComponent },
      { path: 'aboutus', component: AboutComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRouting {}
