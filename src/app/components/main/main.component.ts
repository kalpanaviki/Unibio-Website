import { Component,OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('15s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit{
  slides = [
    {
      imageSrc: '../assets/images/gayathri hatchery edit.jpg',
      caption1: 'Gayathri Bio Marine Private Limited',
      caption2:'Bapatla, Andhra Pradesh',
    },
    {
      imageSrc: '../assets/images/Vision_img.jpg',
      caption1: 'Unibay Aquabreeding Private Limited',
      caption2: 'Lovapalem, Andhra Pradesh'
    },
    {
      imageSrc: '../assets/images/Beach.jpeg',
      caption1: 'MAS Aqua Tecqniks Private Limited',
      caption2: 'Nellore, Andhra Pradesh'
    },
    {
      imageSrc: '../assets/images/golden hatchery.jpeg',
      caption1: 'Golden Marine Harvest Private Limited',
      caption2: 'Anumandai, Tamil Nadu'
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
      this.slideIndex = 4;
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