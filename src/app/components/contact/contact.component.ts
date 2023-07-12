import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactForm = {} as FormGroup;

  initContactForm() {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: [''],
    });
  }
  ngOnInit() {
    this.initContactForm();
  }
}