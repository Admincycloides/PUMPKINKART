import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }
 images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = false;
  // pauseOnFocus = false;
  //
  actvrl:boolean=false;
  clickactive(){
   // this.actvrl=true;

    if(this.actvrl==false){
      this.actvrl=true;
    }
    else{
      this.actvrl=false;
    }
  }

 

}




