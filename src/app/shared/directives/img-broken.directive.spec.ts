import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('img'));
    const directive = new ImgBrokenDirective(el);
    expect(directive).toBeTruthy();
  });
});
