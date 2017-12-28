import { Component, Inject, ElementRef, ViewChild, QueryList, ViewChildren } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatCheckbox, MatFormField, MatSort } from "@angular/material";

import { select } from "@angular-redux/store";
import { SearchAction } from "../api/actions/search.action";

@Component({
    selector: "hackathon-search",
    templateUrl: "search.component.html",
    styleUrls: ["search.component.scss"]
})

export class SearchComponent {
    param = {
        gender: "F",
        province: ["11", "12", "13", "14", "15", "16", "17", "18"],
        year: ["2001", "2000", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"]
    }

    genders = [{
        name: "Female",
        value: "F"
    }, {
        name: "Male",
        value: "M"
    }]

    provinces = [{
        name: "East of China",
        value: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }, {
        name: "West of China",
        value: ["11", "12", "13", "14", "15", "16", "17", "18"]
    }, {
        name: "North of China",
        value: ["21", "22", "23", "24", "25", "26", "27", "28"]
    }, {
        name: "South of China",
        value: ["31", "32", "33", "34"]
    }]

    years = [{
        name: "1980~1989",
        value: ["1981", "1980", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989"],
    }, {
        name: "1990~1999",
        value: ["1991", "1990", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999"],
    }, {
        name: "2000~2009",
        value: ["2001", "2000", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"],
    }]

    count = 0;
    @select(["home", "search"]) readonly search$: any;

    constructor( @Inject(SearchAction) public searchAction: any) {
        this.search$.subscribe(payload => {
            this.count = payload.counts;
        });
    }
    query() {
        this.searchAction.search({
            search: {
                "gender": [this.param.gender],
                "year": this.param.year,
                "province": this.param.province
            }
        });
    }
}