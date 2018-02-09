import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hoverer]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HovererDirective {
  @Input() hoverer;

  constructor(
    private elementRef:ElementRef, 
    private renderer:Renderer) { }
    
  onMouseEnter(){
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'color', this.hoverer);
  }

  onMouseLeave(){
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'color', 'black');
  }

}
