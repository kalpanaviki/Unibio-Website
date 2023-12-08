import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  constructor(private router: Router) { }
  
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

  navigateAndCloseMenu(route: string) {
    const toggleButton = document.querySelector('.navbar-toggler') as HTMLElement;
    if (toggleButton) {
      toggleButton.dispatchEvent(new Event('click'));
    }
  
    this.router.navigate([route]);

     // Close the menu after a delay to allow navigation to finish
     setTimeout(() => {
      this.router.navigate([route]);
      this.closeNav();
    }, 100);
  }
}
