import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private usuariosCollection

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
  ) {
    this.usuariosCollection = this.db.collection('users')
  }

  all() {
    let usuarios = [
      { id: 1, nome: 'Douglas',  telefone: '(61)992336-5454', email: 'douglas@iesb.com'},
      { id: 2, nome: 'Gabriela', telefone: '(61)99233-6546',  email: 'gabriela@iesb.com'},
      { id: 3, nome: 'João',     telefone: '(61)99233-6548',  email: 'joao@iesb.com'},
      { id: 4, nome: 'Maria',    telefone: '(61)99233-6547',  email: 'maria@iesb.com'},
      { id: 5, nome: 'Joana',    telefone: '(61)99233-1234',  email: 'anderson@iesb.com'}
    ];
  
    return of(usuarios)
  }

  save(user) {

    // Convert the user custom object for string and convert for json
    user = JSON.parse(JSON.stringify(user))

    // save method
    this.usuariosCollection.add(user);
  }

}
