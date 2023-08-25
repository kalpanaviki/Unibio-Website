import { Component, OnInit } from '@angular/core';
import { Properties } from '../../appConstants/aboutConstants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  array1: any = [];
  array2: any = [];
  array3: any = [];
  array4: any = [];

  init() {
    this.array1 = Properties.ABOUT_FIRST_ARRAY;
    this.array2 = Properties.ABOUT_SECOND_ARRAY;
    this.array3 = Properties.ABOUT_THIRD_ARRAY;
    this.array4 = Properties.ABOUT_FOURTH_ARRAY;
  }
  ngOnInit() {
    this.init();
  }
}
