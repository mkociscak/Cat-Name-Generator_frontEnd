import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entry: string =''

  constructor(private http: HttpClient) { }

  findCharacter(entry:string) {
    //console.log(entry);
    this.http
    .get('') //web address + api key
    .subscribe(response => {
      console.log(entry)
    })
  }

  ngOnInit(): void {
  }

}




/*
//import { Subject } from 'rxjs';
//import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
//import { SearchService } from './search.service';


  weather: any;
  searchSubject = new Subject(); 
 
  constructor(private searchService: SearchService) { }

    this.searchSubject
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(zip => {
      this.searchService.createAPIObservable(zip)
      .subscribe(response => {
        console.log(response)
        this.weather = response;
      })
    })
  }

}
*/