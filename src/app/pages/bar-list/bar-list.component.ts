import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../services/service.service';
import {Bar} from './bar';
declare var  $ : any;
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
      this.getListado();

  }

  getListado(){
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

  delete(id){

      this.services.deleteBar(id).subscribe(response => {
          let message = "¡ Se eliminó con éxito !";
          let color = 2;
           this.showNotification(color,message);
            console.log(response);
            this.getListado()


      },error => {

          let message = 'Falló la eliminar'
          let color = 4
          console.log(error);
      })
  }

    showNotification(color,message){
        const type = ['','info','success','warning','danger'];

        $.notify({
            icon: "notifications",
            message: message

        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: 'top',
                align: 'right'
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }

}
