import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Bar} from '../bar';
import {NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';
import {Moment} from 'moment';



declare var $: any;
@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class BarFormComponent implements OnInit {
  public bar: any;
  date: "yyyy-mm-dd";
  public bars: any = [];
  public id;


    selectSimple= {startDate: moment().subtract(3, 'days'), endDate: moment().add(3, 'days')};
    selectSimple2= {startDate: moment().subtract(3, 'days'), endDate: moment().add(3, 'days')};

  constructor(private datePipe : DatePipe,private calendar : NgbCalendar ,private services: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.bar = new Bar(null, null, null, null, null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.getRouter();
     this.id = +this.route.snapshot.paramMap.get('id');
    this.barclean;
  }

  onSubmit(id) {

    if(this.selectSimple.startDate!=null && this.selectSimple.endDate !=null ){
      const momentDateStart = new Date(this.selectSimple.startDate.toDate()); // Replace event.value with your date value
      const formattedDateStart = momentDateStart.toISOString();

      this.bar.barTimestamp =formattedDateStart;
    }

    if(this.selectSimple2.startDate!=null && this.selectSimple2.endDate !=null ){
      const momentDate = new Date(this.selectSimple2.startDate.toDate()); // Replace event.value with your date value
      const formattedDate = moment(momentDate.toISOString()).format("YYYY-MM-DD");
      this.bar.barDate = formattedDate;
    }



    model2: Date;
    var newDate = this.bar.barDate
    this.bar.barDate = newDate;

    if(id){
      this.services.getEdit(id,this.bar).subscribe(response=>{
        debugger;
        let message = "¡ Se editó con éxito !";
        let number = 2;
        this.showNotification(number,message);
        this.router.navigate(['/bar-list']);
      },error=>{
        let message = "¡ Hubo un error al editar !";
        let number = 4;
        this.showNotification(number,message);
        console.log(error);
      })
    }else{
      this.services.addBar(this.bar).subscribe(response => {
        debugger;
        let message = "¡ Se registró con éxito !";
        let number = 2;
        this.showNotification(number,message);
        this.router.navigate(['/bar-list']);
        this.barclean;
      }, error => {
        let message = "¡ Hubo un error al registrar !";
        let number = 4;
        this.showNotification(number,message);
        console.log(error);
      });
    }


  }

  salir(){
    this.router.navigate(['/bar-list']);
  }



  getRouter():void{

    const id = +this.route.snapshot.paramMap.get('id');

    this.services.getBarId(id).subscribe(response => {

      this.bar = response;
    });


  }

  barclean(){

    this.bar.barId=null;
    this.bar.barChar=null;
    this.bar.barVarchar=null;
    this.bar.barText=null;
    this.bar.barSmallint=null;
    this.bar.barInteger=null;
    this.bar.barBigint=null;
    this.bar.barReal=null;
    this.bar.barDouble=null;
    this.bar.barDecimal=null;
    this.bar.barBoolean=null;
    this.bar.barDate=null;
    this.bar.barDateMin=null;
    this.bar.barDateMax=null;
    this.bar.barTimestamp=null;
    this.bar.barTimestampMin=null;
    this.bar.barTimestampMax=null;
    this.bar=null;
    this.selectSimple=null;
    this.selectSimple2=null;


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
