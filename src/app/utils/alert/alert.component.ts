import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges {
  @Input() isSubmitted:boolean = false;
  @Input() isSuccess: boolean = false;
  @Input() isError:boolean = false;
  @Input() delay:number = 5000;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isSubmitted'] && this.isSubmitted) {
      setTimeout(() => {
        this.isSubmitted = false;
        this.isSuccess = false;
        this.isError = false;
      }, this.delay);
    }
  }
}
