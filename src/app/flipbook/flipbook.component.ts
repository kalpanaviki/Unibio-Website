import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-flipbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent {
  currentLocation = 1;
  numOfPapers = 12;
  maxLocation = this.numOfPapers + 1;
  bookTransform = 'translateX(0%)';
  prevBtnTransform = 'translateX(0px)';
  nextBtnTransform = 'translateX(0px)';

  paperStates = [
    { flipped: false, zIndex: 12 },
    { flipped: false, zIndex: 11 },
    { flipped: false, zIndex: 10 },
    { flipped: false, zIndex: 9 },
    { flipped: false, zIndex: 8 },
    { flipped: false, zIndex: 7 },
    { flipped: false, zIndex: 6 },
    { flipped: false, zIndex: 5 },
    { flipped: false, zIndex: 4 },
    { flipped: false, zIndex: 3 },
    { flipped: false, zIndex: 2 },
    { flipped: false, zIndex: 1 }
  ];

  openBook(): void {
    this.bookTransform = 'translateX(50%)';
    this.prevBtnTransform = 'translateX(-180px)';
    this.nextBtnTransform = 'translateX(180px)';
  }

  closeBook(isAtBeginning: boolean): void {
    this.bookTransform = isAtBeginning ? 'translateX(0%)' : 'translateX(100%)';
    this.prevBtnTransform = 'translateX(0px)';
    this.nextBtnTransform = 'translateX(0px)';
  }

  goNextPage(): void {
    if (this.currentLocation < this.maxLocation) {
      switch (this.currentLocation) {
        case 1:
          this.openBook();
          this.flipPaper(0, true, 1);
          break;
        case 2:
          this.flipPaper(1, true, 2);
          break;
        case 3:
          this.flipPaper(2, true, 3);
          break;  
        case 4:
          this.flipPaper(3, true, 4);
          break; 
        case 5:
          this.flipPaper(4, true, 5);
          break;  
        case 6:
          this.flipPaper(5, true, 6);
          break;
        case 7:
          this.flipPaper(6, true, 7);
          break; 
        case 8:
          this.flipPaper(7, true, 8);
          break;
        case 9:
          this.flipPaper(8, true, 9);
          break;   
          case 10:
            this.flipPaper(9, true, 10);
            break;
            case 11:
              this.flipPaper(10, true, 11);
              break;
        case 12:
          this.flipPaper(11, true, 12);
          this.closeBook(false);
          break;
        
        default:
          throw new Error("Unknown state");
      }
      this.currentLocation++;
    }
  }

  goPrevPage(): void {
    if (this.currentLocation > 1) {
      this.currentLocation--;
      switch (this.currentLocation) {
        case 1:
          this.closeBook(true);
          this.flipPaper(0, false, 12);
          break;
        case 2:
          this.flipPaper(1, false, 11);
          break;
        case 3:
          this.flipPaper(2, false, 10);
          break;  
        case 4:
          this.flipPaper(3, false, 9);
          break;  
        case 5:
          this.flipPaper(4, false, 8);
          break;
        case 6:
          this.flipPaper(5, false, 7);
          break;
        case 7:
          this.flipPaper(6, false, 6);
          break;
        case 8:
          this.flipPaper(7, false, 5);
          break;
        case 9:
          this.flipPaper(8, false, 4);
          break;
          case 10:
            this.flipPaper(9, false, 3);
            break;
            case 11:
              this.flipPaper(10, false, 2);
              break;
        case 12:
          this.flipPaper(11, false, 1);
          this.openBook();
          break;
        
        default:
          throw new Error("Unknown state");
      }
    }
  }

  flipPaper(paperIndex: number, isFlipped: boolean, zIndex: number): void {
    this.paperStates[paperIndex].flipped = isFlipped;
    this.paperStates[paperIndex].zIndex = zIndex;
  }


}
