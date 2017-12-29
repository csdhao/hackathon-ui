import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
            route: '/home/upload'
        },
        {
            name: 'Get Counts',
            src: './assets/images/icon-ask-abby.png',
            route: '/home/search'
        },
        {
            name: 'About Us',
            src: './assets/images/icon-audience-builder.png',
            route: '/home/aboutus'
        },
    ];

    currentTab = 0;

    tabTimeout;

    constructor(private route: Router) {
        route.navigate(['/home/upload']);
    } 

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
