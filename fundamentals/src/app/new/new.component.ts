import { Component } from '@angular/core';
import { FRUITS } from '../../fruit-lists';
import { Fruit } from '../../fruits';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  fruits= FRUITS;
  selectedFruit!:Fruit;

  onSelect(fruit:Fruit):void{
    this.selectedFruit = fruit
  }

}
