import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service'; 
import Chart from 'chart.js';

  


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
  }

  apiData(){
      this.CommonService.getApiData().subscribe(res=>{
        this.data=res 
      }, err => {
      this.error=err.message
      }
      )
  }



  Factorial(){
    var a = 1 
    for(let i=5;i>=1;i--){
      a=a*i
    }
   this.value=a
  }

  

  chartsData(){
        new Chart(document.getElementById("bar-chart"), {
            type: 'bar',
            data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
                }
            ]
            },
            options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
            }
        });
  }

}
