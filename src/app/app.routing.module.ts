import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "app/not-found/not-found.component";
import { HomeComponent } from "app/home/home.component";
import { FavoritesComponent } from "app/favorites/favorites.component";

const appRoutes: Routes = [
    { path: 'favorites', component: FavoritesComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }