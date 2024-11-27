import { Component,HostListener, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('iframeContainer') iframeContainer!: ElementRef;
  @ViewChild('iframe') iframe!: ElementRef;

  isMenuOpen: boolean = false; 
  constructor(private router: Router, private renderer: Renderer2) { }

  openNav(): void {
    document.getElementById("mySidenav")!.style.width = "250px";
  }

  closeNav(): void {
    document.getElementById("mySidenav")!.style.width = "0";
  }

  navigateAndCloseMenu(route: string): void {
    this.router.navigate([route]);
    setTimeout(() => this.closeNav(), 100);
  }

openIframe() {
    this.renderer.setStyle(this.iframeContainer.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.iframe.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.iframe.nativeElement, 'height', '100%');
    this.iframe.nativeElement.src = 'https://unibioindia.in/enqyForm.asp';
  }

  closeIframe() {
    this.renderer.setStyle(this.iframeContainer.nativeElement, 'display', 'none');
    this.iframe.nativeElement.src = '';
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false; // Close the menu after scrolling
    }
  }
  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo')?.getElementsByTagName('img')[0]; // Get the image inside the logo
    const links = document.querySelectorAll('#navbar a'); // Get all nav links

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (navbar) navbar.style.padding = '5px 10px';
      if (logo) {
        logo.style.height = '40px'; // Height after scroll
        logo.style.width = '92px'; // Width after scroll
      }
      links.forEach(link => {
        (link as HTMLElement).style.fontSize = '20px'; // Font size after scroll
      });
    } else {
      if (navbar) navbar.style.padding = '20px 10px';
      if (logo) {
        logo.style.height = '50px'; // Initial height
        logo.style.width = '115px'; // Initial width
      }
      links.forEach(link => {
        (link as HTMLElement).style.fontSize = '22px'; // Initial font size
      });
    }
  }

}
