import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ToDoServiceService {
  myList : Array<string> = [];
  private toDoSubject = new Subject<any>();
  toDoObservable$ = this.toDoSubject.asObservable();


  constructor() { }

  saveToDo(term: string) {
    console.log(term);
    this.myList.push(term);
    this.toDoSubject.next(this.myList);
  }

  remove() {
    this.myList.pop();
    this.toDoSubject.next(this.myList);
  }
}
