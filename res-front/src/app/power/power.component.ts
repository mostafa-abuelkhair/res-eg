import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  ngOnInit() {
    AOS.init();
  }
}
