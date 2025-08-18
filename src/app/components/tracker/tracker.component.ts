import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tracker',
  imports: [],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {
steps =signal(0);
 Decrement(){
  if(this.steps() > 0){
     this.steps.update((prevstep)=>prevstep-1);
  }

}
Increament(){

   this.steps.update((prevstep)=>prevstep+1);
}
reset(){
  this.steps.set(0)
}
}

