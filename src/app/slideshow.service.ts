import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  slideIndex = 1;
  slides = [
    { image: 'assets/images/SS1.jpeg', caption: '' },
    { image: 'assets/images/SS9.jpg', caption: '' },
    { image: 'assets/images/SS4.jpeg', caption: '' }
  ];

  constructor() {}

  getCurrentSlideIndex() {
    return this.slideIndex;
  }

  setCurrentSlideIndex(index: number) {
    this.slideIndex = index;
  }

  getSlides() {
    return this.slides;
  }
}