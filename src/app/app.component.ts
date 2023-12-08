import { Component,  ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('divEnqy')
  divEnqy!: ElementRef;
  @ViewChild('if1')
  if1!: ElementRef;

  constructor(private renderer: Renderer2) {}
  validateandsave(): void {
    // Access the elements using renderer and ElementRef
    this.renderer.setStyle(this.divEnqy.nativeElement, 'display', 'table');
    this.renderer.setStyle(this.divEnqy.nativeElement, 'width', window.innerWidth * 0.8 + 'px');
    this.renderer.setStyle(this.divEnqy.nativeElement, 'height', window.innerHeight * 1.0 + 'px');
    this.renderer.setStyle(this.divEnqy.nativeElement, 'top', window.innerHeight * 0.03 + 'px');
    this.renderer.setStyle(this.divEnqy.nativeElement, 'left', window.innerWidth * 0.1 + 'px');

    this.renderer.setStyle(this.if1.nativeElement, 'width', this.divEnqy.nativeElement.style.width);
    this.renderer.setStyle(this.if1.nativeElement, 'height', this.divEnqy.nativeElement.style.height);
    this.if1.nativeElement.src = 'http://www.unibioindia.in/enqyForm.asp';
  }

  closeEnqy(): void {
    // Access the element using renderer and ElementRef
    this.renderer.setStyle(this.divEnqy.nativeElement, 'display', 'none');
  }

  
}
