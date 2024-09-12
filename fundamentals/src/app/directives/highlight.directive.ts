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
    console.log("mouse enter",new Date())
    this.el.nativeElement.style.fontSize = "50px"
   }

   @HostListener("mouseleave")
   resetFontSize(){
    this.el.nativeElement.style.fontSize = "30px"

    console.log("mouse leave")
   }


}
