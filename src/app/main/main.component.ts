import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Properties } from '../appConstants/aboutConstants';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, SlideshowComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  array1: any = [];
  array2: any = [];
  array3: any = [];
  array4: any = [];

  isLaptop = false;
  isMobile = false;

  constructor() {}

  init() {
    this.array1 = Properties.ABOUT_FIRST_ARRAY;
    this.array2 = Properties.ABOUT_SECOND_ARRAY;
    this.array3 = Properties.ABOUT_THIRD_ARRAY;
    this.array4 = Properties.ABOUT_FOURTH_ARRAY;
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

