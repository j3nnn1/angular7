import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatComponent} from './cat/cat.component';
import {CatAddComponent} from './cat-add/cat-add.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: CatComponent}, // could be redirectTo: Component, pathMatch: full
  { path: 'add', component: CatAddComponent},
  { path: 'details', component: CatDetailsComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
