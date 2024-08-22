import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  private dataSrv = inject(DataService);
  public staticText = this.dataSrv.StaticText;
  public page = '';

  constructor(private router: Router) { }

  ngOnInit() { 
    let urlPath = this.router.url ?? 'Home';
    this.page = urlPath.replace('-', ' ').replace('/page', '').replace('/', '');
    if (this.page == 'broll') this.page = 'B-Roll'
   }

  public goTo(page:any) {
    this.router.navigate(['page', page]);
  }

}
