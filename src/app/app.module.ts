import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { reducer } from './shared/reducers/weather.reducer';
// import { reducer } from './shared/reducers/authetification.model';
import { WeatherEffects } from './shared/effects/weather.effect';
import { ApiService } from './api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducer } from './shared/reducers/authetification.model';
import { reducer as reducer3 } from './shared/reducers/weather.reducer';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      weather: reducer3,
      user: reducer
}),
    EffectsModule.forRoot([WeatherEffects]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
