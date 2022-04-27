import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  text = "";
  vazio = "";
  //@Output() aobuscar = new EventEmitter<any>();


  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  buscar(){
   // const textDaBusca = {texto : this.text};
   // this.aobuscar.emit(textDaBusca);
   this.router.navigate(['/filmes',this.text]);
   console.log('buscando. header.. '+this.text);
  }

}
