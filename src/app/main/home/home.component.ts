import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { typeoptions } from '../constant';
import { UserInfoService } from '../../user-info.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private userInfoService: UserInfoService) { }
  userInfo: any;
  ngOnInit(): void {
      const typed = new Typed('.typed-element', typeoptions);
      this.userInfoService.getUserInfo().subscribe((userInfo) => {
        this.userInfo = userInfo;
      });
  }
}
