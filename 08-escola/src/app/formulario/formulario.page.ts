import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { Usuario } from '../Models/usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  public usuario: Usuario = new Usuario()
  id

  constructor(
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');

    this.usuarioService.getUsuario(this.id).subscribe((data: any) => {
      console.log(data);
      this.usuario = data
    });
  }

  buscarCep() {
    this.enderecoService.buscarCep(this.usuario.endereco.cep).subscribe((data: any) => {
      data.cep = data.cep.replace("-", "")
      this.usuario.endereco = data;
    });
  }

  save() {
    this.usuarioService.save(this.id, this.usuario)
    // Redirect for route.
    this.route.navigateByUrl('/list')
  }

  delete() {
    this.usuarioService.delete(this.id)
    // Redirect for route.
    this.route.navigateByUrl('/list')
  }

}
