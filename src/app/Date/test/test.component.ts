import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  parentMessage : string
  full:any
  constructor(private CommonService :CommonService) { }

  ngOnInit() {
  }

  getFullDate(){

    this.CommonService.getDate().subscribe(message => {
      this.parentMessage = message.date;
      console.log(this.parentMessage)

    });


  }



}
