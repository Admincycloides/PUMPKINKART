import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pumpkinkart';
  
  showHead: boolean = false;
  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/signin-') {
            this.showHead = false;
          } 
          else if (event['url'] == '/signup-'){
            this.showHead = false;
          }
          else {
            // console.log("NU")
            this.showHead = true;
          }
        }

      });
    }
}
