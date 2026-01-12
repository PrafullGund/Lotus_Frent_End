import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import { LoginComponent } from './login/login.component';
import { Slide14Component } from './slide14/slide14.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginexpertComponent } from './loginexpert/loginexpert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportComponent } from './import/import.component';
import { CourseDataComponent } from './course-data/course-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MyLearningComponent,
    CourseStartComponent,
    Slide2Component,
    Slide3Component,
    Slide4Component,
    Slide5Component,
    Slide6Component,
    Slide7Component,
    Slide8Component,
    Slide9Component,
    Slide10Component,
    Slide11Component,
    Slide12Component,
    Slide13Component,
    LoginComponent,
    Slide14Component,
    LoginexpertComponent,
    DashboardComponent,
    ImportComponent,
    CourseDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
