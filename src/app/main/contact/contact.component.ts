import { Component } from '@angular/core';
import {UserInfoService } from '../../user-info.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userInfo : any;
  constructor(private userInfoService : UserInfoService) {
    this.userInfoService.getUserInfo().subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
  }
}
