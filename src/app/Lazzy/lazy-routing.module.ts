import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { MaterialComponent } from './material/material.component';
import { PdfFileComponent } from './pdf-file/pdf-file.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AnimationsComponent } from './animations/animations.component';


const routes: Routes = [
  { path: '', component: LazyComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'pdf', component: PdfFileComponent },
  { path: 'image', component: ImageUploadComponent },
  { path: 'animation', component: AnimationsComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
