import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
  joke="loading"
  constructor(private jokeService:JokeService){
    
  }
  ngOnInit(){
    this.getAnotherJoke()

  }
  getAnotherJoke(){
    this.joke="loading"
    this.jokeService.getJoke().subscribe((data:any)=>{
      this.joke = data.joke
    },(err)=>{
      console.log("Error in Promise")
    })
    // this.jokeService.getJoke().subscribe({
    //   next:(data:any)=>this.joke=data.value,
    //   error:(error)=>console.log(error)
    // })


  }
}
