import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class UploadService {
    constructor(
        private http: Http
    ) {
    }

    upload() {

        return this.http.get("./api/fileParser/ddd").map(res => res).toPromise();
    }
    getStatus(id) {
        return this.http.get('./api/status/' + id).map(res => res).toPromise();
    }

}