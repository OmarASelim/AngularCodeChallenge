import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FlickrService } from '../../services/flicker.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

  model$: Observable<any>;
  photos: Object;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {
  }
  
  ngOnInit() {
    // Make another GET function in Service

    // EventEmitter for Tag value

    // Pagination



    // this.tag.pipe(switchMap((query: string) => this._flickrService.getAllResults(query)))
    //   .subscribe(value => {
    //     this.photos = value;
    //   });
  }
}
