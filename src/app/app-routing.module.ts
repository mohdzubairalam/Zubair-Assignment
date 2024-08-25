import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './shared/otp/otp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home' },
//  {path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent },
{path: 'otp', component: OtpComponent },
{path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
