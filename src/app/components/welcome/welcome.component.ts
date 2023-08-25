import { Component, OnInit } from '@angular/core';
import { Properties } from 'src/app/appConstants/aboutConstants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  array: any;

  init() {
    this.array = Properties.FEATURES_DATA;
  }
  ngOnInit() {
    this.init();
  }
}
