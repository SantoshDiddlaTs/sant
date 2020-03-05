import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


 

@Component({
  selector: 'app-rx-filter',
  templateUrl: './rx-filter.component.html',
  styleUrls: ['./rx-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxFilterComponent  {
public inputValue: string = 'san';
public debouncedInputValue = this.inputValue;
public people$: Subject<any> = new Subject();
private searchDecouncer$: Subject<string> = new Subject();

constructor(private http: HttpClient) { }

public ngOnInit(): void {
  this.setupSearchDebouncer();
  this.search(this.inputValue);
}

public onSearchInputChange(term: string): void {
  this.searchDecouncer$.next(term);
}

private setupSearchDebouncer(): void {
 
  this.searchDecouncer$.pipe(
    debounceTime(250),
    distinctUntilChanged(),
  ).subscribe((term: string) => {
    this.debouncedInputValue = term;
    this.search(term);
  });
}

private search(term: string): void {
  this.people$.next(null);
  const url = `https://swapi.co/api/people/?search=${term.toLowerCase().trim()}`;
  this.http.get(url).subscribe((results) => {
    this.people$.next(results);
  });
}

}
