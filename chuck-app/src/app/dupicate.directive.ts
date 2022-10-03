import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDupicate]'
})
export class DupicateDirective {
  @Input() set appDupicate(value:boolean) {
    this.viewContainer.clear();

    // this.viewContainer.createEmbeddedView(this.templateRef);
    if(value){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }


  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

}
