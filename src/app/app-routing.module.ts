import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDateComponent } from './Date/show-date/show-date.component';
import { DirFilterComponent } from './Filter/dir-filter/dir-filter.component';
import { RxFilterComponent } from './Filter/rx-filter/rx-filter.component';


const routes: Routes = [
  { path: '', component: ShowDateComponent },
  { path: 'directive_filter', component: DirFilterComponent },
  { path: 'rx_filter', component: RxFilterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }