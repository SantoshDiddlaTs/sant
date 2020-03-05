import { Component, OnInit } from '@angular/core';
import { CARS } from '../../cars';

interface Car {
  brand: string;

}

@Component({
  selector: 'app-dir-filter',
  templateUrl: './dir-filter.component.html',
  styleUrls: ['./dir-filter.component.css']
})
export class DirFilterComponent implements OnInit {
  cars: Car[] = CARS;
  searchText: string;

  constructor() { }

  ngOnInit() {
  }





    
}
