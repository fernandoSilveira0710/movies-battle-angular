import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: any;

  buscar($event: any) {
    this.text = $event;
    console.log('buscando appcomp... ' + this.text.texto);
    console.log(this.text);
  }

}

