import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private cursoCollection
    public curso

    constructor(
        private http: HttpClient,
        private db: AngularFirestore
    ) {
        this.cursoCollection = this.db.collection('curso')

        this.curso = this.cursoCollection.snapshotChanges().pipe(
            map((actions: any) => {
                return actions.map(a => {
                    const data = a.payload.doc.data()
                    const id = a.payload.doc.id
                    return {id, ...data}
                });
            })
        );
    }

    all() {
        return this.curso;
    }

    salvar(curso, id) {
        curso = JSON.parse(JSON.stringify(curso))

        // Caso teja id ele altera, se não insere um novo.
        if (id) {
            return this.cursoCollection.doc(id).update(curso);
        }
        return this.cursoCollection.add(curso)
    }

    excluir(id) {
        return this.cursoCollection.doc(id).delete();
    }

    findCurso(id) {
        return this.cursoCollection.doc(id).valueChanges();
    }

}
