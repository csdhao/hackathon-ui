import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class SearchService {
    constructor(
        private http: Http
    ) {
    }

    search(param) {

        return this.http.post("./api/getCounts", param).map(res => res).toPromise();
    }

}