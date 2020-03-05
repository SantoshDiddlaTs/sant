import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-date-byday',
  templateUrl: './date-byday.component.html',
  styleUrls: ['./date-byday.component.css']
})
export class DateBydayComponent implements OnInit {
  @Input() DaybyDate: string;
 
  constructor() { }

  ngOnInit() {
  }

}
