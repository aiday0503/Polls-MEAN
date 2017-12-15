import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class ApiService {
  polls = new BehaviorSubject([]);
  users = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getAllPolls() {
    this._http.get('/all').subscribe(
      (response: any[]) => {
        this.polls.next(response);
      }
    );
  }

  newPoll(poll) {
    this._http.post('/new', poll).subscribe(
      (response: any[]) => {
        this.getAllPolls();
       }
    );
  }
  getAllUsers() {
    this._http.get('/all').subscribe(
      (response: any[]) => {
        this.users.next(response);
      }
    );
  }

  newUser(user) {
    this._http.post('/new', user).subscribe(
      (response: any[]) => {
        this.getAllUsers();
       }
    );
  }


}
