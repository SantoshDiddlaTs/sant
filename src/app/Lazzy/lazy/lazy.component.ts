import { Component, OnInit } from '@angular/core';
var Highcharts = require('highcharts');  
require('highcharts/modules/exporting')(Highcharts); 
import { CommonService } from '../../common.service'; 


  


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  value:any
  shadow:boolean=false
  data:any
  error:string

 
  constructor( private CommonService:  CommonService) { }

  ngOnInit() {
    this.apiData()
  }
  apiData(){
      this.CommonService.getApiData().subscribe(res=>{
        this.data=res 
    //  console.log("asdf",this.data)
      }, err => {
      this.error=err.message
      }
      )
  }

  open(url){
    window.open(url,'','postwindow');
  }

  Factorial(){
    var a = 1 
    for(let i=5;i>=1;i--){
      a=a*i
    }
   this.value=a
  }

  

  Charts(){
   
  
  Highcharts.chart('containerr', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Monthly Average Temperature'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: 'Temperature (°C)'
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
  });
  }

}
