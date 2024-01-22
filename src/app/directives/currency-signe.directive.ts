import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCurrencySigne]',
  standalone: true
})
export class CurrencySigneDirective implements AfterViewInit {

  constructor(
    private element: ElementRef<HTMLAnchorElement>
  ) { }

  ngAfterViewInit(): void {
    this.element.nativeElement.innerHTML = '$' + this.element.nativeElement.innerHTML
  }

}
