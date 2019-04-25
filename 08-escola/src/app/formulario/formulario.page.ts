import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { Usuario } from '../Models/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  public usuario: Usuario = new Usuario()

  constructor(
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
  }

  buscarCep() {
    this.enderecoService.buscarCep(this.usuario.endereco.cep).subscribe((data: any) => {
      // data.cep = data.cep.replace("-", "")

      console.log(data);
      this.usuario.endereco = data;
    });
  }

  save() {
    this.usuarioService.save(this.usuario)
  }

  all() {

  }

}
