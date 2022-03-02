import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QUESTION } from './questions';


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

