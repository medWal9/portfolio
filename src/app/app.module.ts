import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ServicesComponent } from './main/services/services.component';
import { WorkComponent } from './main/work/work.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { ContactComponent } from './main/contact/contact.component';
import {NgClickOutsideDirective} from 'ng-click-outside2';
import { ScrollSpyModule } from 'ng-spy';
import { BrandsComponent } from './main/brands/brands.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoService } from './user-info.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './utils/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ServicesComponent,
    WorkComponent,
    TestimonialsComponent,
    ContactComponent,
    BrandsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScrollSpyModule,
    NgClickOutsideDirective,
    HttpClientModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
