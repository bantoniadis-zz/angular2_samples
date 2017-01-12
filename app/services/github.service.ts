import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id: string = '0c9afb039b3f387ee37d';
    private client_secret: string = '210d9228225bc584d4043b78cc2254f76c6cac5e';

    constructor(private _http: Http) {  // the _http will be injected
        console.log('GitHub Service Ready...');
        this.username = 'bantoniadis';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());  // this returns an observable in JSON format
    }
    
    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());  // this returns an observable in JSON format
    }

    updateUser(username: string) {
        this.username = username;
    }
}