import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-options',
  templateUrl: './character-options.component.html',
  styleUrls: ['./character-options.component.css']
})
export class CharacterOptionsComponent implements OnInit {

options: any;



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    

  }

}
//this.route.paramMap
//.subscribe(params => {
//this.options = nextNum);