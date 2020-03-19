import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatTableModule } from '@angular/material/table';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy/lazy.component';
import { MaterialComponent } from './material/material.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PdfFileComponent } from './pdf-file/pdf-file.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimationsComponent } from './animations/animations.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LazyComponent,
    MaterialComponent,
    PdfFileComponent,
    ImageUploadComponent,
    AnimationsComponent,
    CardComponent
  ]
})
export class LazyModule { }
