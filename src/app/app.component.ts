import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lotus';
  root = true;
  home = true;
  expert: boolean = true;
  dashboard = true;
  import = true;

  showLayout = true;
  showLayout1 = true;
  showLayout2 = true;
  showLayout3 = true;
  showLayout4 = true;
  showLayout5 = true;
  showLayout6 = true;
  showLayout7 = true;
  showLayout8 = true;
  showLayout9 = true;
  showLayout10 = true;
  showLayout11 = true;
  showLayout12 = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide layout on slide pages
        //expert
        this.root = event.urlAfterRedirects === '/';
        console.log(this.expert)
        this.expert = !event.urlAfterRedirects.startsWith('/expert');
        this.dashboard = !event.urlAfterRedirects.startsWith('/dashboard');
        this.import = !event.urlAfterRedirects.startsWith('/import');

      }
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide layout on slide pages
        this.root = event.urlAfterRedirects === '/';
        // console.log(this.root)
        this.home = !event.urlAfterRedirects.startsWith('/home');
        this.showLayout = !event.urlAfterRedirects.startsWith('/slide2');
        this.showLayout1 = !event.urlAfterRedirects.startsWith('/slide2');
        this.showLayout2 = !event.urlAfterRedirects.startsWith('/slide4');
        this.showLayout3 = !event.urlAfterRedirects.startsWith('/slide5');
        this.showLayout4 = !event.urlAfterRedirects.startsWith('/slide6');
        this.showLayout5 = !event.urlAfterRedirects.startsWith('/slide7');
        this.showLayout6 = !event.urlAfterRedirects.startsWith('/slide9');
        this.showLayout7 = !event.urlAfterRedirects.startsWith('/slide8');
        this.showLayout8 = !event.urlAfterRedirects.startsWith('/slide10');
        this.showLayout9 = !event.urlAfterRedirects.startsWith('/slide11');
        this.showLayout10 = !event.urlAfterRedirects.startsWith('/slide12');
        this.showLayout11 = !event.urlAfterRedirects.startsWith('/slide13');
        this.showLayout12 = !event.urlAfterRedirects.startsWith('/slide14');

      }
    });
  }


}
