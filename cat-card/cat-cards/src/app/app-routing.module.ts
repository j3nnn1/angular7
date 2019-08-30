import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatComponent} from './cat/cat.component';
import {CatAddComponent} from './cat-add/cat-add.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';


const routes: Routes = [
  { path: '', component: CatComponent},
  { path: 'add', component: CatAddComponent},
  { path: 'details', component: CatDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
