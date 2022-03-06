import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { QUESTION } from '../questions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
 
 questions: any = QUESTION
 question: any;
 text: any;


constructor(private route: ActivatedRoute) { }
 
 

ngOnInit(): void {
  this.route.paramMap
  .subscribe(params => {
    this.question = QUESTION.find(question => {
      return question.id}); //parse into each sep id
    })
}
}




