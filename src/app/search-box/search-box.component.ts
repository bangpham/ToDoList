import { Component, OnInit, Input } from '@angular/core';
import {ToDoServiceService} from "../to-do-service.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() myList : Array<string> = [];
  constructor(private toDoService: ToDoServiceService) {
    this.toDoService.toDoObservable$.subscribe(item => {
      this.myList = item;
    });
  }

  ngOnInit() {
  }

}
