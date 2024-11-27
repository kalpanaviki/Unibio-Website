import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-off-canvas-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffCanvasMenuComponent {
  @Input() isMenuOpen: boolean = false; // Receive menu state from parent component
  @Output() menuClosed = new EventEmitter<void>(); // Event to notify menu close

  navigateAndCloseMenu(path: string): void {
    console.log('Navigate to:', path);
    this.closeMenu();
  }

  closeMenu(): void {
    this.isMenuOpen = false; // Close the offcanvas
    this.menuClosed.emit();  // Emit close event to parent
  }
}
