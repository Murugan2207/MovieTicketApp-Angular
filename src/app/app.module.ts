import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import {BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MovielistComponent,
    ViewUsersComponent,
    UpdateUsersComponent,
    AddMoviesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
