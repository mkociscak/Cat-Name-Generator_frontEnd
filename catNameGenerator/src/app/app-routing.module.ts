import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { ChoicesComponent } from './choices/choices.component';
import { QUESTION } from './questions';

const routes: Routes = [
  {
    path: "questions",
    component: QuestionsComponent,
    children: [
      {
        path: ":id",
        component: QuestionsComponent,
      },
      {
        path: ":id/:text",
        component: QuestionsComponent,
      },
      {
        path: ":id/:text/choices/:optionsId",
        component: ChoicesComponent,
      },
      {
        path: ":id/:text/choices/:optionsId:optionsText",
        component: ChoicesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
