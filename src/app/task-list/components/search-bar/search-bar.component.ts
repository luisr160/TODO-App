import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchInput:string = '';

  @Output()
  public onSearch:EventEmitter<string> = new EventEmitter();

  constructor() { }

  public searchTasks():void{
    const searchTerm = this.searchInput;
    this.onSearch.emit(searchTerm);
  }

  ngOnInit(): void {
  }

}
