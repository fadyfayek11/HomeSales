import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HttpClient} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavbarComponent } from './property/navbar/navbar.component';
import { HouseingService } from './service/houseing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes, RouterModule} from "@angular/router";
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { LoginComponent } from './property/login/login.component';
import { RegistComponent } from './property/Regist/Regist.component';

const appRoutes: Routes = [

  {path: '', component: PropertyListComponent},
  {path: 'add-rent', component: PropertyListComponent},
  {path: 'details/:id', component: PropertyDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'regist', component: RegistComponent},
  {path: 'add-property', component: AddPropertyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyListComponent,
    NavbarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    LoginComponent,
    RegistComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    HouseingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
