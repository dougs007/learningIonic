import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  usuarios

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuarioService.all().subscribe((data: any)=>{
      this.usuarios = data;
      console.log(data);
    });      

  }

}
