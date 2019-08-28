import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../services/service.service';
import {Bar} from './bar';
import {Moment} from 'moment';
import {BarGet} from './barGet';
import * as moment from 'moment';
declare var  $ : any;
@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.scss']
})
export class BarListComponent implements OnInit {

  public bar: Bar;

  public barGet:BarGet;

  public bars: any = [];

  public results:any = [];


    selected = {startDate: moment().subtract(3, 'days'), endDate: moment().add(3, 'days') };
    selectSimple= {startDate: moment().subtract(3, 'days'), endDate: moment().add(3, 'days')};

    selected2={startDate: moment().subtract(3, 'days'), endDate: moment().add(3, 'days') };

    constructor(private _route: ActivatedRoute, private _router: Router, private services: ServiceService) {

        this.barGet= new BarGet(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);


    }

  ngOnInit() {
      this.getListado();
      this.barclean();


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

          let message = 'No se pudo eliminar'
          let color = 4
          console.log(error);
      })
  }




  barGetParam(){
      debugger;

      if(this.selected.endDate!=null && this.selected.startDate !=null){

          const momentDateStart = new Date(this.selected.startDate.toDate()); // Replace event.value with your date value
          const formattedDateStart = moment(momentDateStart.toISOString()).format("YYYY-MM-DD");

          const momentDateEnd = new Date(this.selected.endDate.toDate()); // Replace event.value with your date value
          const formattedDateEnd = moment(momentDateEnd.toISOString()).format("YYYY-MM-DD");

          this.barGet.barDateMin = formattedDateStart;
          this.barGet.barDateMax = formattedDateEnd;

      }

      if(this.selectSimple.startDate!=null && this.selectSimple.endDate !=null ){
          const momentDateStart = new Date(this.selectSimple.startDate.toDate()); // Replace event.value with your date value
          const formattedDateStart = moment(momentDateStart.toISOString()).format("YYYY-MM-DD");

          this.barGet.barDate =formattedDateStart;
      }

      if(this.selected2.endDate!=null || this.selected2.startDate !=null){
          const momentDateStart = new Date(this.selected2.startDate.toDate()); // Replace event.value with your date value
          const formattedDateStart = momentDateStart.toISOString();

          const momentDateEnd = new Date(this.selected2.endDate.toDate()); // Replace event.value with your date value
          const formattedDateEnd = momentDateEnd.toISOString();

          this.barGet.barTimestampMin = formattedDateStart;
          this.barGet.barTimestampMax = formattedDateEnd;

      }

      this.services.getBarForParameters(this.barGet).subscribe(response=>{

          this.results = response;
          this.bars = this.results.results;
          this.barclean();

      }, error1 => {

      })

  }

  barclean(){

      this.barGet.barId=null;
      this.barGet.barChar=null;
      this.barGet.barVarchar=null;
      this.barGet.barText=null;
      this.barGet.barSmallint=null;
      this.barGet.barInteger=null;
      this.barGet.barBigint=null;
      this.barGet.barReal=null;
      this.barGet.barDouble=null;
      this.barGet.barDecimal=null;
      this.barGet.barBoolean=null;
      this.barGet.barDate=null;
      this.barGet.barDateMin=null;
      this.barGet.barDateMax=null;
      this.barGet.barTimestamp=null;
      this.barGet.barTimestampMin=null;
      this.barGet.barTimestampMax=null;
      this.selected=null;
      this.selectSimple=null;
      this.selected2=null;
      this.getListado();

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
