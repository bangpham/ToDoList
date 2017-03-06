import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {ToDoServiceService} from "./to-do-service.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
