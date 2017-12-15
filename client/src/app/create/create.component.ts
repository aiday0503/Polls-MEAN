import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll = {
    question: '',
    optionOne: '',
    optionTwo: '',
    optionThree: '',
    optionFour: ''
  };

  constructor(private _api: ApiService) { }

  ngOnInit() {
  }
  createPoll(){
    this._api.newPoll(this.poll);
    this.poll = { question: '', optionOne: '', optionTwo: '', optionThree: '', optionFour: ''};
  }
}
