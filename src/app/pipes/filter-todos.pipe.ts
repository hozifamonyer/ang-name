import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], seachBy: string): Todo[] {

    return todos.filter(todo=>todo.title.toLowerCase().includes(seachBy));

  }

}
