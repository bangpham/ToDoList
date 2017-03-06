import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputVariable :  string = '';
  myList : Array<string> = [];
  saveToDo() {
    console.log(this.inputVariable);
    this.myList.push(this.inputVariable);
  }

  remove() {
    this.myList.pop();
  }
}
