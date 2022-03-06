import { Component, OnInit } from '@angular/core';
import { QUESTION } from '../questions';
import { ActivatedRoute } from '@angular/router';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

 
 questions: any = QUESTION
 question: any;
 text: any;
 options: any;
 option: any;
 id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
