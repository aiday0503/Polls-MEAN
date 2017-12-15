import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  questions;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.polls.subscribe(
      (data) => { this.questions = data; }
    );
    this._api.getAllPolls();

  }

}
