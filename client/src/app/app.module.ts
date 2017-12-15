import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import { SurveyComponent } from './survey/survey.component';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app-routing.modules';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    SurveyComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
