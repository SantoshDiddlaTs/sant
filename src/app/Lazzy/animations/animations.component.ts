import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
   animations: [
      trigger('changeDivSize', [
        state('initial', style({
          backgroundColor: 'green',
          width: '100px',
          height: '100px'
        })),
        state('final', style({
          backgroundColor: 'red',
          width: '200px',
          height: '200px'
        })),
        transition('initial=>final', animate('1500ms')),
        transition('final=>initial', animate('1000ms'))
      ]),
      trigger('listAnimation', [
        transition('* => *', [ // each time the binding value changes
          query(':leave', [
            stagger(100, [
              animate('2s', style({ opacity: 0 }))
            ])
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }),
            stagger(100, [
              animate('2s', style({ opacity: 1 }))
            ])
          ], { optional: true })
        ])
      ])
    ]
})



export class AnimationsComponent implements OnInit {
 
  currentState = 'initial';
  items = [];
  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  showItems() {
    [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].map((i) => {
      this.items.push("User Number - " + i)
    })
  }
  hideItems() {
    this.items = [];
  }
  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
  logAnimation(_event) {
    console.log(_event)
  }



}
