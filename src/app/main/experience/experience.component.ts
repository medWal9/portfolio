import { Component } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: any;

  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.getUserInfo().subscribe((userInfo) => {
      this.experiences = userInfo.experiences;
    });
  }
}
