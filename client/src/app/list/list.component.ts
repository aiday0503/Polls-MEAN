import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  users;
  polls;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.users.subscribe(
      (data) => { this.users = data; }
    );
    this._api.getAllPolls();

    
  }

}
