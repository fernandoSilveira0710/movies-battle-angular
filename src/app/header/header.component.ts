import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  text = "";
  @Output() aobuscar = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }


  buscar(){
    const textDaBusca = {texto : this.text};
    this.aobuscar.emit(textDaBusca);
    console.log('buscando. header.. '+this.text);
  }

}
