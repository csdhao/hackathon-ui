import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    navItems = [
        {
            name: 'Upload Data',
            src: './assets/images/icon-audience-onboard.png',
            route: '/upload'
        },
        {
            name: 'Get Counts',
            src: './assets/images/icon-ask-abby.png',
            route: '/search'
        },
        // {
        //     name: 'About Us',
        //     src: './assets/images/icon-audience-builder.png',
        //     route: '/aboutus'
        // },
    ];

    currentTab = 0;

    tabTimeout;

    constructor() { }

    ngOnInit() {
        this.animateTabs();

        window.addEventListener('click', () => {
            this.cancelAutoScroll();
        });
    }

    animateTabs() {
        this.tabTimeout = setTimeout(() => {
            if (this.currentTab === 3) {
                this.currentTab = 0;
            } else {
                this.currentTab++;
            }
            this.animateTabs();
        }, 5000);
    }

    cancelAutoScroll() {
        clearTimeout(this.tabTimeout);
    }

}
