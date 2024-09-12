import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  constructor(private http:HttpClient) { 
  }

  // private http = inject(HttpClient)//for function
  category:string="dev"
  getJoke(){
    //return the Observable<Object>
    return this.http.get(`https://v2.jokeapi.dev/joke/Programming?type=single`)


  } 
}
