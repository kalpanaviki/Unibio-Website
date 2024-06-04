import { Component, OnInit, HostListener } from '@angular/core';
import { Properties } from '../appConstants/aboutConstants';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  array1: any = [];
  array2: any = [];
  array3: any = [];
  array4: any = [];
  array5: any = [];

  isLaptop = false;
  isMobile = false;

  constructor() {}

  init() {
    this.array1 = Properties.ABOUT_FIRST_ARRAY;
    this.array2 = Properties.ABOUT_SECOND_ARRAY;
    this.array3 = Properties.ABOUT_THIRD_ARRAY;
    this.array4 = Properties.ABOUT_FOURTH_ARRAY;
    this.array5 = Properties.ABOUT_FIFTH_ARRAY;
  }

  ngOnInit() {
    this.init();
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    const breakpoint = 480; 

    this.isLaptop = screenWidth > breakpoint;
    this.isMobile = screenWidth <= breakpoint;
  }
}
