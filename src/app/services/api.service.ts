import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private  httpOptions: any;

    constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${this.auth.getToken()}`
            })
        };
    }

    post(url: string, data: any): Observable<any> {
        return this.http.post<any>(url, data, this.httpOptions);
    }

}
