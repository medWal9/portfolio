import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options } from '../constant';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public customOptions: OwlOptions = options;
  userProjects: any;
  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.getUserInfo().subscribe((userInfo) => {
      this.userProjects = userInfo.projects;
    });
  }

  getProjectTech(techs:[string]) {
    return techs.join(', ');
  }
}
