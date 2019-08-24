import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Foo} from '../foo';
import * as moment from 'moment';
declare var $: any;
@Component({
  selector: 'app-foo-form',
  templateUrl: './foo-form.component.html',
  styleUrls: ['./foo-form.component.scss']
})
export class FooFormComponent implements OnInit {

  public foo: any;
  date: "yyyy-mm-dd";
  public bars: any = [];
  public id;




  constructor(private datePipe : DatePipe,private calendar : NgbCalendar ,private services: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.foo = new Foo(null, null, null, null, null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.getRouter();
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  onSubmit(id) {
    const momentDate = new Date(this.foo.fooDate); // Replace event.value with your date value
    const momentDate2 = new Date(this.foo.fooTimestamp); // Replace event.value with your date value
    const formattedDate = moment(momentDate.toISOString()).format("YYYY-MM-DD");
    const formattedDate2=momentDate2.toISOString();
    this.foo.fooDate = formattedDate;
    this.foo.fooTimestamp = formattedDate2;

    model2: Date;
    var newDate = this.foo.fooDate
    this.foo.fooDate = newDate;

    if(id){
      this.services.getFooEdit(id,this.foo).subscribe(response=>{
        debugger;
        let message = "¡ Se editó con éxito !";
        let number = 2;
        this.showNotification(number,message);
        this.router.navigate(['/foo-list']);
      },error=>{
        let message = "¡ Hubo un error al editar !";
        let number = 4;
        this.showNotification(number,message);
        console.log(error);
      })
    }else{
      this.services.addFoo(this.foo).subscribe(response => {
        debugger;
        let message = "¡ Se registró con éxito !";
        let number = 2;
        this.showNotification(number,message);
        this.router.navigate(['/foo-list']);

      }, error => {
        let message = "¡ Hubo un error al registrar !";
        let number = 4;
        this.showNotification(number,message);
        console.log(error);
      });
    }


  }

  salir(){
    this.router.navigate(['/foo-list']);
  }



  getRouter():void{

    const id = +this.route.snapshot.paramMap.get('id');

    this.services.getFooId(id).subscribe(response => {

      this.foo = response;
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
