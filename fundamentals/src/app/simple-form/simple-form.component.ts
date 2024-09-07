import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule],  
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'] 
})
export class SimpleFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    console.log("adsf", this.myForm.value)
  }
}
