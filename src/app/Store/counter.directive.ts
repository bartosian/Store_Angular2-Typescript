import {Directive, Input, SimpleChange, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: "[counterOf]"
})
export class CounterDirective {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>){}

  @Input("counterOf")
  counter: number;

  ngOnChanges(changes: {[property: string]: SimpleChange}) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template,
        new CounterContext(i+1));
    }
  }
}

class CounterContext {
  constructor(public $implicit: any) {}
}
