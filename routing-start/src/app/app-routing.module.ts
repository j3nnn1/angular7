// this is a second module so we need to created the new class
import {NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'servers',
    // canActivate: [AuthGuard],
      canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ] },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'} // this should be the last one defined catch all routes
  // structure in angular: path dont add / in the value
  // registring the route in this same file
];

@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
  exports: [ // from this module que deberia ser accesible desde afuera
      RouterModule
  ]
})

export class AppRoutingModule {

}
