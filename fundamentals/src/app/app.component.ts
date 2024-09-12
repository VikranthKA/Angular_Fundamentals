import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleFormComponent } from './components/simple-user-form/simple-user-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,
      
          SimpleFormComponent,
          UserProfileComponent,
          JokesComponent,
          AComponent,
          B1Component,
          RouterOutlet
        
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
