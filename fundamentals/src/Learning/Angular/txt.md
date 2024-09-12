# Angular

* **Angular is a framework for building UI**
* **You can create single page application (SPA) which improves user experience**
* **You can create reusable components**
* **MVC at client side**
* **Quicker development & less dependency on third party library(eg-routing,validation,SSR)**
* **Angular apps are fast(AOT compiler)**
 
___

## Steps to works with Angular
1. To create the angular-globally `npm install -g @angular/cli`

2. To create a project `ng new first-ng-app`

3. cd `first-ng-app` and `ng serve -o or npm run start`

___
### Theory

Standalone Component?
* A standalone component is a type of component that doesn't belong to any specific Angular module
* Less boiler code/configuration 
* Lazy loading a component is also possible now

Interpolation
* Use the created variable in the anguler HTML file `{{variable}}`

Property Binding
* Its a way of using the variable value to value of a property eg
```Typescript
<button [disabled="isBtnDisabled"]>Button</button>
```
* The value enclosed with the square bracket is the property we are binding

Event binding
* In the HTML we can see the `onChange event` instead of that we use the just `(change)="function()"` eg 
`<input type="text" (input)="onChange()"/>`
* If the `onChange()` has any parameter the it would be `onChange($event)`
* In the ts file 
```Typescript
onChange(e:Event):void{const value = (e.target<HTMLInputElement>.value)console.log(value)}
```

Two way data Binding

* The changing to data for `TS to HTML and HTML to TS` by using the above code we can give `inputValue =  value`

* We can use another syntax and we can simplify the above code is by `[(ng-Model)]="inputValue"` and import the `FormModule ` in TS file and no need of `onChange in the TS` 
* syntax `<input type="text" [(ngModel)]="inputValue"/>`

For and If in 17 version
* We can use the for loop to loop through the values in angular the syntax would be in TS ` ` and in Template HTML 
```HTML
@for(user ofuserInfo;track user.name){@if(user.age >= 18){<h3>Name:{{user.name}} Status :{{user.isOnline ? "Online" : "Offline"}}Age:{{user.age}}</h3>}@else {<h3>User :{{user.name}} are not valid</h3>}}
```
___


**wt are angular Directives?**
Are functions that are executed when they are found on the DOM by the Angular compiler.

| **Types**             | **Description**                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Component**         | Defined using the `@Component` decorator. <br> Angular adds the content based on where you specify the selector.          |
| **Structural Directive** | Alters or modifies the DOM. <br> Examples: `*ngIf`: Acts according to some give condition.When condition is true, element will be added to the DOM, `*ngFor`:This directive repeats itself for every element present in the list, `*ngSwitch`.                                             | **Attribute** | Modify behaviour of existing elements   Used as attribute elements .
| **Custom** | Defined under the @Directive decorator `*@Directive decorator*`Selector is used to identify the attribute


___
Props
* The way of passing the data form parent to child`<app-child user="name"/>` user is the props
* And recieve the value in the ts as `@Input() user:string=""`
* Can change the name as other by using alias `{alias:"user"}`
* `@Input({transform:AnyFunction/booleanAttribute})` to change the data type to required

___
Pipe & Custom Pipe
* We can add some pipe ti existing code to change the data in UI`{{name | currency:"INR"}}`
* For custom pipes 
`ng g p pipes/countryCode`
* In the pipe.ts file we can see the code as `transform(value: unknown, ...args: unknown[]): unknown {return null}`
* Inside the object we can write the logic `{return "+91 "+value}`

___
Custom Directives
* `ng g d directives/nameOfYourChoice`
 ```Typescript
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef) {

   }

   @HostBinding("style.backgroundColor")
   CustomBgColor ="orange"

   @HostListener("mouseenter")
   changeFontSize(){
    console.log("mouse enter")
    this.el.nativeElement.style.fontSize = "50px"
   }

   @HostListener("mouseleave")
   resetFontSize(){
    this.el.nativeElement.style.fontSize = "30px"

    console.log("mouse leave")
   }


}
```

___
Life Cycles In Angular
* constructor{  
 * Init properties
 * Dependency injection
 * Event-listner registers}
above will run in the constructor

* ngOnChnages(changes:SimpleChange):void{
  * if any data changes This will change again
}

* ngOnInit(){
  * init properties
  * event listener register
  * Api call
}

* ngOnDestroy(){
  * unregister event listner
}

These are the above call before HTML is loaded 

After loaded
```Typescript
    ngAfterViewInit():void{
    console.log("afterview",this.heading?.nativeElement.textContent)
    }


```

Services
* Its way manage the State and handling the promises in Angular
* `ng g s services/nameOfServices`
```Typescript
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

```

* And In the any Component use the data 
```Typescript
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
  }
}


```
* We can use the Services as a state Management 
```Typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0

  getCounter(){
    return this.count
  }

  incrementCounter(){
    this.count += 1
  }

  decrementCounter(){
    if(this.count>0)
    this.count -= 1
  }

} 

```

* In the above code we have done all basic of count inc and dec and now use in the 3 components
  `A B1 B2`
* use the counterService in A and B1 and in the B1 use the B2
 * In all the three component the changes will change
* Use the `providers:[CounterService]` in the B1 a new instance of counterService will be get in the B1


___
Signal 
* To the angular UI tells that this variable or value should be change in UI
* Then above `counterService` code will be like
```Typescript
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

```
* `username = input("",{alias:"user",transform:formatName}),this.username(),name()` for input in the HTML


___
Routing
* ```Typescript
  import { routes } from './app.routes';

  export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
  };

  ```

* ```Typescript
  export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
  ];

```












