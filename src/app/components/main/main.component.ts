import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef;

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement;
    media.muted = true;
    media.play();
  }
}
