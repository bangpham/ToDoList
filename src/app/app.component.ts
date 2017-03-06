import { Component } from '@angular/core';
import {ToDoServiceService} from "./to-do-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputVariable :  string = '';

  constructor(private toDoService: ToDoServiceService) { }

  saveToDo() {
    this.toDoService.saveToDo(this.inputVariable);
  }

  remove() {
    this.toDoService.remove();
  }
}
