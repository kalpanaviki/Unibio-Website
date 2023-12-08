import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  
  navigateAndCloseMenu(route: string) {
    const toggleButton = document.querySelector('.navbar-toggler') as HTMLElement;
    if (toggleButton) {
      toggleButton.dispatchEvent(new Event('click'));
    }
  
    this.router.navigate([route]);
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      const toggleButton = document.querySelector('.navbar-toggler');
      if (toggleButton) {
        toggleButton.dispatchEvent(new Event('click'));
      }
    }
  }
  openNav(): void {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav(): void {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
}
