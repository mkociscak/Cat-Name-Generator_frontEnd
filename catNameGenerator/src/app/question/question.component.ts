import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question:string;
  username:string; 

  constructor(private userService:UserService) { 
    this.question = 'Do you want a new name for your cat?';
    this.username = this.userService.getUsername();
  }

  ngOnInit(): void {
  }

}
