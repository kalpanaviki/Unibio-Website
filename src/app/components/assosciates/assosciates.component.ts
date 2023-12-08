import { Component,OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-assosciates',
  templateUrl: './assosciates.component.html',
  styleUrls: ['./assosciates.component.scss'],
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
export class AssosciatesComponent implements OnInit{
  slides = [
    {
      imageSrc: '../assets/images/UnibioIndiafront.png',
      caption1: 'Unibio (India) Hatcheries Pvt. Ltd.',
      caption2: 'Mugaiyur, Tamil Nadu',
      link:'/welcome'
    },

    {
      imageSrc: '../assets/images/gayathri hatchery edit.jpg',
      caption1: 'Gayathri Bio Marine Private Limited',
      caption2:'Bapatla, Andhra Pradesh',
      link:'/resource'
    },
    {
      imageSrc: '../assets/images/Unibay_Site.jpg',
      caption1: 'Unibay Aquabreeding Private Limited',
      caption2: 'Lovapalem, Andhra Pradesh',
      link:'/unibay'
    },
    {
      imageSrc: '../assets/images/Beach.jpeg',
      caption1: 'Mas Aqua Techniks Private Limited',
      caption2: 'Nellore, Andhra Pradesh',
      link:'/resource'
    },
    {
      imageSrc: '../assets/images/golden hatchery.jpeg',
      caption1: 'Golden Marine Harvest Private Limited',
      caption2: 'Anumandai, Tamil Nadu',
      link:'https://goldenmarine.in/',
      externalLink: true //flag identity
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
