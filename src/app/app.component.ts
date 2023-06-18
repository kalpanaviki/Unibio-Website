import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Unibio-Website';

  ngOnInit() {
    const showToast = document.getElementById('#welcomeToast')!;
    console.log(showToast);
    // showToast.toast('show');
  }
}
