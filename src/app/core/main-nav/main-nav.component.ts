import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  @Input() color = 'primary';

  @Input() authenticated = false;

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  toggleSideNavFn = () => {
    this.toggleSideNav.emit();
  }

}
