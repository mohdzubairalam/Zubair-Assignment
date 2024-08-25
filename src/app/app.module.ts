import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './shared/otp/otp.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RecursiveDropdownComponent } from './shared/recursive-dropdown/recursive-dropdown.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    HomeComponent,
    RecursiveDropdownComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
