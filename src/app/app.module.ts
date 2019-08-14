import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home/home.component';
import { TranslatePipe } from './pips/translate.pipe';
import { LoginComponent } from './views/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {ApiService} from './services/api.service';
import {AuthGuard} from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslatePipe,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [
      AuthService,
      ApiService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
