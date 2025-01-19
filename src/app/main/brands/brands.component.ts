import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { autoSlideOptions } from '../constant';
import { UserInfoService } from '../../user-info.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public customOptions2: OwlOptions = autoSlideOptions;
  constructor(private userInfoService: UserInfoService) { }
  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe(userInfo => {
      this.slidesStore = userInfo.brands;
    });
  }
}
