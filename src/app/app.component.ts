import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLinkWithHref } from '@angular/router';
import { TodosService } from './services/todos.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[TodosService]
})
export class AppComponent {
  hello=signal('hozifa');
}
