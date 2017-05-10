import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './toolbar/search-bar/search-bar.component';
import { HomeComponent, SearchNotFoundDialog } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './connect/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './providers/auth-guard';
import { RestService } from "./services/rest.service";
import { UserService } from './services/user.service';
import { ConnectComponent } from './connect/connect.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroCardsComponent } from './hero-cards/hero-cards.component';
import { RegisterComponent } from './connect/register/register.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchBarComponent,
    HomeComponent,
    FavoritesComponent,
    NotFoundComponent,
    MainComponent,
    LoginComponent,
    ConnectComponent,
    RegisterComponent,
    HeroDetailsComponent,
    HeroCardsComponent,
    SearchNotFoundDialog,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    RestService,
    UserService
  ],
  entryComponents: [
    SearchNotFoundDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
