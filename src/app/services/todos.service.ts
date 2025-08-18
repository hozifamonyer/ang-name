import { inject, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.type';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http=inject(HttpClient)
todoitem=signal<Todo[]>([])
findAllTodos(){
  const URL='https://jsonplaceholder.typicode.com/todos'

  return this.http.get<Todo[]>(URL).pipe(
    catchError(error =>{
      console.log(error);
      throw error
    })
  )
}
}
