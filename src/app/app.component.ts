import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @select(['router']) readonly router$: Observable<any>;

  sideNavOpen = true;

  authenticated = false;

  ngOnInit() {
    this.router$.subscribe((store) => {
      if (store !== '/login') {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });
  }

  toggleSideNav = () => {
    this.sideNavOpen = !this.sideNavOpen;
  }

}
