import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  text: any;

  buscar($event: any) {
    this.text = $event;
    console.log('buscando appcomp... ' + this.text);
    console.log(this.text);
  }

  ngOnChanges() {
    console.log('ngOnChanges appcomp' );
  }

  constructor(router: Router) {
    console.log('constructor appcomp');
  }


}

