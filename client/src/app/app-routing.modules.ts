import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormComponent,
    children: []
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: ListComponent,
    children: []
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateComponent,
    children: []
  },
  {
    path: 'survey',
    pathMatch: 'full',
    component: SurveyComponent,
    children: []
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }