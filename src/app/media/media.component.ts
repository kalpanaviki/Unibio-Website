import { Component } from '@angular/core';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  selectedMenuItem: string = 'news'; // Default menu item

  selectMenuItem(menuItem: string): void {
    this.selectedMenuItem = menuItem;
  }
}
