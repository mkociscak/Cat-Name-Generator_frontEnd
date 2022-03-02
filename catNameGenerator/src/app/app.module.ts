import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
//import { QuestionComponent } from './question/question.component';
import { CharacterOptionsComponent } from './character-options/character-options.component';
//import { EntryComponent } from './entry/entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavBottomComponent,
    //QuestionComponent,
    CharacterOptionsComponent,
    //EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
