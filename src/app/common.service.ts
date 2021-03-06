import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }



  getDate(): Observable<any>
  {
    let apiURL = `https://jsonmock.hackerrank.com/datetime`;
    return this.http.get(apiURL)
  }

  getApiData() : Observable<any> {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get(url)
  }




}
