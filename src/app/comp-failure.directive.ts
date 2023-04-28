import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private obj:ElementRef) {

    obj.nativeElement.style.color='black';

   }

   @HostListener('mouseleave') onmouseleave()
   {
    this.setcolor('red');
   }
   setcolor(color:string)
   {
    this.obj.nativeElement.style.color=color;
   }

}
