import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
//import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component'
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
      { path: 'aboutus', component: AboutComponent },
       { path: 'services', component: ServicesComponent },
       { path: 'contactus', component: ServicesComponent },
       {path:'**', component:AppNotFoundComponent}
 ];

@NgModule({
 

imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],

})
export class AppRouting {}
