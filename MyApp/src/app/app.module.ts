import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';


const routes : Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'login', component: LoginComponent},
  
];
const appRoutes = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
