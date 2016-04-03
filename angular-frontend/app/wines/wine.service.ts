import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IWine } from './wine';

@Injectable()
export class WineService {
    private _apiUrl = '/cxf/wines.json';
    
    constructor(private _http: Http) {      
    }
    
    getWines(): Observable<IWine[]> {
        return this._http.get(this._apiUrl)
            .map((response: Response) => <IWine[]> response.json())
            .catch(this.handleError);
    }
    
    getWine(id: number): Observable<IWine> {
        return this.getWines()
            .map((wines: IWine[]) => wines.filter(w => w.id === id)[0]);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}