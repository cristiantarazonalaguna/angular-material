import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../services/service.service';
import {Bar} from './bar';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.scss']
})
export class BarListComponent implements OnInit {

  public bar: Bar;

  public bars: any = [];

  public results:any = [];

  constructor(private _route: ActivatedRoute, private _router: Router, private services: ServiceService) {
  }

  ngOnInit() {
    debugger;
    this.services.getBar().subscribe(response => {
            this.results = response;
          this.bars = this.results.results;
        },
        error => {

          console.log(error);
        });
  }

  redirect(){
      this._router.navigate(['/barform']);
  }

}
