import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
//import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
    { path: '', component: HeaderComponent },
      { path: 'aboutus', component: AboutComponent },
       { path: 'services', component: ServicesComponent },
       { path: 'contactus', component: ServicesComponent }
 ];

@NgModule({
 

imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],

})
export class AppRouting {}
