import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QUESTION } from './question';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
 

 questions: any = QUESTION 
 question: any;
 text: any;
 id: any;
 options: any;



constructor(private route: ActivatedRoute) { }
 
  

ngOnInit(): void {
  this.route.paramMap
  .subscribe(params => {
    this.question = QUESTION.find(question => {
     let paramId: string = params.get('id') || '';
      return question.id === parseInt(paramId);
    })
})

}
}


//questionId: any;
//optionText: any;
//questions: any = QUESTION;
//question: any;
//questionId: any;
//optionText: any;

/*

 <a routerLink="/questions/{{question.id}}">{{question.text}}/a>


ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.question = QUESTION.find(question => {
        let paramId: string = params.get('questionId') || '';
        return question.questionId === parseInt(paramId);
      })
    })
 }
constructor(private route: ActivatedRoute) { }
 implements OnInit



import { Component, OnInit } from '@angular/core';
import { QUESTION } from './question';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
 qIndex: string|null = '';




constructor(private route: ActivatedRoute) { }
 
  

  

ngOnInit(): void {
  this.route.paramMap
  .subscribe(params => {
    this.qIndex = params.get('id');
  })
}

}
 */
