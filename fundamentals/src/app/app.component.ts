import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleFormComponent } from './components/simple-user-form/simple-user-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,SimpleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
