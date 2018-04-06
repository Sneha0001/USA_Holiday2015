
import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post,holidayCollection} from './post';

@Injectable()
export class PostService {
    constructor(private http:Http) {
    }

    getData():Observable<Post[]> {
        return this.http.get('https://holidayapi.com/v1/holidays?country=US&year=2015&key=4be2b8b0-c07b-4b5b-aa85-10a49e742840')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body.holidays || [];
    }

    private handleError(error:any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}