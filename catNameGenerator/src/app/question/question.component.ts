import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question:string = 'Do you want a new name for your cat?';

  constructor() { }

  ngOnInit(): void {
  }

}
