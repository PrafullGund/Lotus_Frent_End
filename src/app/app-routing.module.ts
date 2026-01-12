import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLearningComponent } from './sidebar/my-learning/my-learning.component';

import { CourseStartComponent } from './sidebar/my-learning/course-start/course-start.component';

import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { Slide4Component } from './slide4/slide4.component';
import { Slide5Component } from './slide5/slide5.component';
import { Slide6Component } from './slide6/slide6.component';
import { Slide7Component } from './slide7/slide7.component';
import { Slide8Component } from './slide8/slide8.component';
import { Slide9Component } from './slide9/slide9.component';
import { Slide10Component } from './slide10/slide10.component';
import { Slide11Component } from './slide11/slide11.component';
import { Slide12Component } from './slide12/slide12.component';
import { Slide13Component } from './slide13/slide13.component';
import { Slide14Component } from './slide14/slide14.component';
import { LoginexpertComponent } from './loginexpert/loginexpert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportComponent } from './import/import.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //routing for trainer
    {path:'',component:LoginComponent},
    {path:'expert',component:LoginComponent},


    
  // {path:'expert',component:LoginexpertComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'import',component:ImportComponent},
  
  //routing for user
  { path: 'home', component: Headers },
  { path: 'my-learning', component: MyLearningComponent },
  { path: 'my-learning/course-start', component: CourseStartComponent },
  { path: 'slide2', component: Slide2Component },
  { path: 'slide3', component: Slide3Component },
  { path: 'slide4', component: Slide4Component },
  { path: 'slide5', component: Slide5Component },
  { path: 'slide6', component: Slide6Component },
  { path: 'slide7', component: Slide7Component },
  { path: 'slide8', component: Slide8Component },
  { path: 'slide9', component: Slide9Component },
  { path: 'slide10', component: Slide10Component },
  { path: 'slide11', component: Slide11Component },
  { path: 'slide12', component: Slide12Component },
  { path: 'slide13', component: Slide13Component },
  { path: 'slide14', component: Slide14Component },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
