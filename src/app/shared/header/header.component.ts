import { Component, inject, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  private dataSrv = inject(DataService);
  public staticText = this.dataSrv.StaticText;
  
  constructor( ) { }

  ngOnInit() {}

}
