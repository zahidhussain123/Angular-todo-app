import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem : string
todos: Todo[]
  constructor() { 
    this.localItem = localStorage.getItem("todos")

    if(this.localItem == null){

      this.todos = [ ]
    }
    else {
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  taskMnager(todo : Todo){
    console.log("hello there" , todo)
    const ind = this.todos.indexOf(todo)
    
    this.todos.splice(ind , 1)
   localStorage.setItem("todos" , JSON.stringify(this.todos))    
  }

  getData (todo : Todo) {
   localStorage.setItem("todos" , JSON.stringify(this.todos))    

  this.todos.push(todo)    
  }
  

}
