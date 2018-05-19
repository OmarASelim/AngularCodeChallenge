import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class FlickrService {
    result$: Observable<any>;
    key = '9d36c7156cedeb140ecaad40970112f2';
    constructor(private _http: Http) { };

    getResult(query: string) {

        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${query}&per_page=12&format=json&nojsoncallback=1`;

        return this._http
            .get(url)
            .pipe(map(res => res.json()))
            .pipe(map((val) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map((photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                            title: photo.title,
                            date_taken: photo.date_taken
                        }
                    })
                }
                else {
                    return [];
                }
            }));
    }
}

