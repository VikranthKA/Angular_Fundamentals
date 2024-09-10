import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'simple-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],  
  templateUrl: './simple-user-form.component.html',
  styleUrls: ['./simple-user-form.component.css'] 
})
export class SimpleFormComponent {
  form: FormGroup;
  submitted = false;
  formData:any = null;
  formDataKeys :string[]=[]

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(1)]],
      email:['',[Validators.required,Validators.email]],
      phoneNumber:['',[Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.maxLength(10),Validators.minLength(10)]],
      address:['',[Validators.required]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      dob:['',Validators.required]

    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.valid){
      this.formData = this.form.value;
      this.formDataKeys= Object.keys(this.formData) 
    }
  }




}
