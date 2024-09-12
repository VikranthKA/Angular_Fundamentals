import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, ElementRef, input, Input, numberAttribute, SimpleChange, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContryCodePipe } from '../../pipes/contry-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';


function formatName(value:string):string{
  return "Hi " + value
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,
    ContryCodePipe,
    HighlightDirective,
  
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @ViewChild("myHeadingbottom") heading?:ElementRef


  constructor(){
    console.log("constructor called",this.name)
    console.log("constructor",this.heading?.nativeElement.textContent)
  }

  ngAfterViewInit():void{
    console.log("afterview",this.heading?.nativeElement?.textContent)

  }

  ngOnChanges(changes:SimpleChange):void{
    console.log("ngOnChanges",changes)
    console.log("ngOnChanges",this.heading?.nativeElement?.textContent)
  }

  ngOnInit(){
    console.log("ngOnInt called",this.name)
    console.log("ngOnInt called",this.heading?.nativeElement.textContent)
  }

  ngOnDestroy(){
    console.log("component destroyed")
  }

  name: string = "ABCD"
  status: string = "single"
  salary: number = 600000
  isBtnDisabled: boolean = true
  inputValue: string = "test"
  phoneNumber:number=1234567890
  bgColor="blue"

  userInfo = [{
    name: "ANA", isOnline: false, age: 10
  },
  {
    name: "EMMA", isOnline: true, age: 30
  },
  {
    name: "MIA", isOnline: false, age: 40
  }]

  // onChange(e:Event):void{
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputValue = value
  //   }

  @Input({alias:"user",transform:formatName}) username:string="";
  // username = input("",{
  //   alias:"user",//use of signal
  //   transform:formatName
  // })
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) ph!:number;


}
