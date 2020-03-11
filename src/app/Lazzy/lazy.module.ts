import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy/lazy.component';
import { MaterialComponent } from './material/material.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    LazyComponent,
    MaterialComponent
  ]
})
export class LazyModule { }
