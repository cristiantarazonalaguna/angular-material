import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Bar} from '../bar';
declare var $: any;
@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.scss']
})
export class BarFormComponent implements OnInit {
  public bar: any;

  public bars: any = [];

  constructor(private services: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.bar = new Bar(null, null, null, null, null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.getRouter();
  }

  onSubmit() {
  debugger;
    this.services.addBar(this.bar).subscribe(response => {
      let message = "¡ Se registró con éxito !";
      let number = 2;
      this.showNotification(number,message);
      this.router.navigate(['/bar-list']);

    }, error => {
      let message = "¡ Hubo un error al registrar !";
      let number = 4;
      this.showNotification(number,message);
      console.log(error);
    });
  }

  getRouter():void{
    debugger;
    const id = +this.route.snapshot.paramMap.get('id');

    this.services.getBarId(id).subscribe(response => {

      this.bar = response;
    });

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
