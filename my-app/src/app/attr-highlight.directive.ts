import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appAttrhighlight]'
})
export class AttrhighlightDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor="green";
    renderer.setElementStyle(this.elementRef.nativeElement,'backgroundColor','green')
    
   }
 

}
