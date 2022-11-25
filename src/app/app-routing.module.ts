import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { DeletelistComponent } from './deletelist/deletelist.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { UserlistsComponent } from './userlists/userlists.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
  {
    path:'',component:UserlistsComponent
  },
  {
    path:'viewlist/:id',component:ViewlistComponent
  },
  {
    path:'addlist',component:AddlistComponent
  },
  {
    path:'updatelist',component:UpdatelistComponent
  },
  {
    path:'deletelist',component:DeletelistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
