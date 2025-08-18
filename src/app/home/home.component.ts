import { Component } from '@angular/core';
import { TrackerComponent } from '../components/tracker/tracker.component';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-home',
  imports: [TrackerComponent,TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title = 'ang-name';
  keyupfun(event:KeyboardEvent){
    console.log(event.key)

  }
}
