import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovielistComponent } from './movielist/movielist.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  
    {path:'home',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'movielist',component:MovielistComponent},
    {path:'view-users',component:ViewUsersComponent,canActivate:[AuthGuard,RoleGuard]},
    {path:'add-movies',component:AddMoviesComponent},
    {path:'update-users/:id',component:UpdateUsersComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
