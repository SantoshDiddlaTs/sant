import { Component, OnInit } from '@angular/core';
// import { CommonService } from '../../common.service';
// import {formatDate} from '@angular/common';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.css']
})
export class ShowDateComponent implements OnInit {
  // parentMessage : any
  // full:any
  // subscription: Subscription;
  // constructor(private CommonService :CommonService) { }

  ngOnInit() {
  }
  
//   getFullDate(){
//     // let date = this.CommonService.getDate();
//     // let datee = formatDate(date, 'dd-mm-yyyy, hh:mm a', 'en');
//     // this.full = datee;
//     // this.parentMessage = date;
//     this.CommonService.getDate().subscribe(message => { 
//       this.parentMessage = message; 
//       console.log(this.parentMessage)
    
//     });


//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
// }

}
