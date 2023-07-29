import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppName:string = 'Portifólio'
  constructor(private router: Router){}
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: ()=> this.router.navigate(['accordion']) },
  ];


}
