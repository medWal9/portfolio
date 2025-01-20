import { Component } from '@angular/core';
import {UserInfoService } from '../../user-info.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userInfo : any;
  contactForm!: FormGroup;
  isSubmitted = false;
  isSuccess = false;
  isError = false;

  constructor(private userInfoService : UserInfoService, private fb: FormBuilder, private http: HttpClient) {
    this.userInfoService.getUserInfo().subscribe((userInfo) => {
      this.userInfo = userInfo;
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required]
      });
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('https://formspree.io/f/123', this.contactForm.value).subscribe(
        response => {
          this.isSubmitted = true;
          this.isSuccess = true;
          this.isError = false;
          this.contactForm.reset();
        },
        error => {
          this.isSubmitted = true;
          this.isSuccess = false;
          this.isError = true;
        }
      );
    }
  }
}
