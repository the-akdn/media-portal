import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public  accessCheck = true;
  public pwd: any;
  constructor() {
  }

  checkPwd() {
    if (this.pwd=='Z-17122cea_js@79b3059$-09c71bc7_js-n') this.accessCheck= true;
  }

}
