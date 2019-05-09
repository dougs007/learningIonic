import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private usuariosCollection
  usuarios

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
  ) {
    this.usuariosCollection = this.db.collection('users')

    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        })
      })
    )

  }

  all() {
    return this.usuarios
  }

  save(id = null, user) {
    // Convert the user custom object for string and convert for json
    user = JSON.parse(JSON.stringify(user))
    if (id) return this.usuariosCollection.doc(id).update()
    // save method
    this.usuariosCollection.add(user)
  }

  delete(id) {
    // Search the collection $id
    this.usuariosCollection.doc(id).delete()
  }

  getUsuario(id) {
    return this.usuariosCollection.doc(id).valueChanges()
  }

}
