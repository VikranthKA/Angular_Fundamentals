import { Component } from '@angular/core';
import { Fruit } from '../../fruits';
import { FRUITS } from '../../fruit-lists';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  count:number = 0;

  incrementCount(){
    this.count += 1
  }

  decrementCount(){
    if(this.count > 0){
      this.count -= 1
    }
  }

 
}
