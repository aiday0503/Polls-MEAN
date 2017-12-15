import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppRoutingModule } from '../app-routing.modules';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   user = {
   name: '',
  };

  constructor( private _api: ApiService, private router: Router) {}
   
  ngOnInit() {
  }

  createUser(){
    this._api.newUser(this.user);
    this.user= { name: ''};
    this.router.navigate(['/dashboard']);
    }
  }


