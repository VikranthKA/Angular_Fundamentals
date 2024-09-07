import { Component} from '@angular/core';

import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CountComponent } from './count/count.component';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,CountComponent,CommonModule,FormsModule,NewComponent,SimpleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'fundamentals';
  msg = "woking fine";
  myArray = [1,2,3,4,5,6];
  fruits={
    name:"Apple"
  }
}
