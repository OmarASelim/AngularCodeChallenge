import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FlickrService } from './services/flicker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlickrService]
})
export class AppComponent implements OnInit {
  searchControl = new FormControl();

  model$: Observable<any>;
  photos: Object;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe(switchMap((query: string) => this._flickrService.getResult(query)))
      .subscribe(value => {
        this.photos = value;
      });
  }
}
