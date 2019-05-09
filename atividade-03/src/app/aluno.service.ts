import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  private alunosCollection
  alunos

  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) {
    this.alunosCollection = this.db.collection('alunos')

    this.alunos = this.alunosCollection.snapshotChanges().pipe(
      map((actions: any) => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        });
      })
    );
  }

  all() {
    return this.alunos;
  }

  salvar(aluno, id) {
    aluno = JSON.parse(JSON.stringify(aluno))
    if (id) {
      return this.alunosCollection.doc(id).update(aluno);
    }
    return this.alunosCollection.add(aluno)
  }

  excluir(id) {
    return this.alunosCollection.doc(id).delete();
  }

  getUsuario(id) {
    return this.alunosCollection.doc(id).valueChanges();
  }

}