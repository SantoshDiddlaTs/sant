import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: '', component: LazyComponent },
  { path: 'material', component: MaterialComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
