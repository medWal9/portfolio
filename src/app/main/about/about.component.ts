import { Component } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  userInfo: any;
  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }
}
