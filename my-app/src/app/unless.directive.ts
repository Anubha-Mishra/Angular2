import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templateRef:TemplateRef<any>, private viewContainerref:ViewContainerRef) { }
  @Input() set appUnless(condition:boolean){
    if(!condition){
        this.viewContainerref.createEmbeddedView(this.templateRef);
    }else{
        this.viewContainerref.clear();
    }
  }
}

