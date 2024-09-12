import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = signal(0)
  
  doubleCount:Signal<number>=computed(()=>this.count()*2)

  constructor(){
    effect(()=>{
      console.log("count",this.count(),"double count :",this.doubleCount())
    })
  }
  getCounter(){
    return this.count()
  }

  incrementCounter(){
    // this.count += 1
    this.count.update((oldValue)=>oldValue+1)
  }

  decrementCounter(){
     if(this.count()>0) this.count.update((oldValue=>oldValue-1))
    // this.count -= 1
  
  }

}
