import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { Endereco } from '../Models/endereco';
import { Usuario } from '../Models/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  public cep
  public endereco: Endereco = new Endereco()
  public usuario: Usuario = new Usuario()

  constructor(
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
  }

  buscarCep() {
    this.enderecoService.buscarCep(this.endereco.cep).subscribe((data: any) => {
      data.cep = data.cep.replace("-", "")
      this.endereco = data;
    });
  }

  save() {
    console.log(this.usuario);
    this.usuarioService.save(this.usuario)
  }

}
