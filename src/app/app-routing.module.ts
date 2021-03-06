import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { MainComponent } from "./main/main.component";
import { ConnectComponent } from './connect/connect.component';
import { AuthGuard } from './providers/auth-guard';

const appRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
        { path: 'hero/:id', component: HeroDetailsComponent},
        { path: 'favorites', component: FavoritesComponent },
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]},
    { path: 'connect', component: ConnectComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
