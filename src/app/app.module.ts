import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ShowDateComponent } from './Date/show-date/show-date.component';
import { AppRoutingModule } from './app-routing.module';
import { DateBydayComponent } from './Date/date-byday/date-byday.component';
import { DirFilterComponent } from './Filter/dir-filter/dir-filter.component';
import { RxFilterComponent } from './Filter/rx-filter/rx-filter.component';
import { CommonService } from './common.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { TestComponent } from './Date/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDateComponent,
    DateBydayComponent,
    DirFilterComponent,
    RxFilterComponent,
    FilterPipe,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
