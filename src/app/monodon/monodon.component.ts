import { Component,OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-monodon',
  templateUrl: './monodon.component.html',
  styleUrls: ['./monodon.component.scss'],

})
export class MonodonComponent implements OnInit{
  slides = [
    {
      slideId: 'borewater',
      imageSrc: '../assets/images/borewater.jpg',
      caption1: 'Know your bore water',
      link:'/learn'
    },
    {
      slideId: 'acclimatisation',
      imageSrc: '../assets/images/acclimatisation.jpg',
      caption1: "Acclimatisation of PL's",
      link:'/resource'
    },
    {
      slideId: 'tankUpscaled',
      imageSrc: '../assets/images/Tank Upscaled.jpeg',
      caption1: 'Why Nursery?',
      link:'/resource'
    },
  ];
  
  slideIndex = 1;
  isLaptop = false;
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showSlides(this.slideIndex);
    });
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n: number) {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = 3;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }


  checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    const breakpoint = 468;

    this.isLaptop = screenWidth > breakpoint;
    this.isMobile = screenWidth <= breakpoint;

    console.log('isLaptop:', this.isLaptop);
    console.log('isMobile:', this.isMobile);
  }
}
