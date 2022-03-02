import { Component } from '@angular/core';
import { QUESTION } from './questions/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = QUESTION;
}