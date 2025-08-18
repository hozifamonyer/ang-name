import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.type';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';
import { TitleCasePipe } from '@angular/common';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [HighlightCompletedTodoDirective, TitleCasePipe,FilterTodosPipe,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  ngOnInit(): void {
 this.todoservice.findAllTodos().subscribe((todos)=>{
this.todos.set(todos)

 })
  }
todoservice=inject(TodosService);
todos=signal<Todo[]>([])
seachBy= signal('');


handleUpdateTodo(todo:Todo){
this.todos.update((prevsate)=>{
return prevsate.map(current=>{
  if(todo.id === current.id ){
    return {
      ...current,
      completed:!current.completed
    }

  }
  return current;

})
})
}
}
