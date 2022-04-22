import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appShadow]',
})
export class ShadowDirective implements OnChanges {
  @Input('appShadow') entercolor: string = 'black';
  //private elemet:ElementRef;
  constructor(private elemet: ElementRef) {
    // this.elemet=elemet;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elemet.nativeElement.style.boxShadow = '2px 2px 2px 2px   gray';
  }
  @HostListener('mouseenter') onmousent() {
    this.elemet.nativeElement.style.boxShadow = `2px 2px 2px 2px ${this.entercolor} `;
  }
  @HostListener('mouseout') onmousout() {
    this.elemet.nativeElement.style.boxShadow = '2px 2px 2px 2px gray ';
  }
}
