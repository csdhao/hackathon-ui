import { Component, Inject, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatCheckbox, MatFormField, MatSort } from '@angular/material';

import { select } from '@angular-redux/store';
import { SearchAction } from '../api/actions/search.action';

@Component({
    selector: 'hackathon-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss']
})

export class SearchComponent {
    param = {
        gender: 'f',
        province: 1,
        age: 3
    }

    genders = [{
        name: 'Female',
        value: 'f'
    }, {
        name: 'Male',
        value: 'm'
    }]

    provinces = [{
        name: 'ShangHai',
        value: 1
    }, {
        name: 'JiangSu',
        value: 2
    }, {
        name: 'ZheJiang',
        value: 3
    }]

    ages = [{
        name: '1980~1989',
        value: 1
    }, {
        name: '1990~1999',
        value: 2
    }, {
        name: '2000~2009',
        value: 3
    }]

    count = 0;
    @select(['home', 'search']) readonly search$: any;

    constructor( @Inject(SearchAction) public searchAction: any) {
        this.search$.subscribe(payload => {
            this.count = payload.counts;
        });
    }
    query() {
        this.searchAction.search({
            search: {
                "gender": ["F", "M"],
                "year": ["1981", "1980"],
                "province": [1, 2, 3]
            }
        });
    }
}