import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private obj:ElementRef) {

  }

  @HostListener('mouseenter') onmouseenter()
  {
   this.setcolor('green');
  }
  setcolor(color:string)
  {
   this.obj.nativeElement.style.color=color;
  }

}
