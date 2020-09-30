import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flash-notification',
  templateUrl: './flash-notification.component.html',
  styleUrls: ['./flash-notification.component.scss']
})
export class FlashNotificationComponent implements OnInit {

  @Input() type: string;
  @Input() msg: string;

  constructor() { }

  ngOnInit() {
  } 


}
