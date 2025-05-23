import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('Revento -->',this.elHost)
    elNative.src = 'https://cdn-icons-png.flaticon.com/512/545/545676.png';
  }
  constructor(private elHost: ElementRef) { 
  }

}
